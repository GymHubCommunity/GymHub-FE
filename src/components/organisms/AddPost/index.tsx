import { ChangeEvent, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import useSubmitPost from '@/apis/Query/Post/useSubmitPost';
import useUpdatePost from '@/apis/Query/Post/useUpdatePost';
import { postProps, submitPostProps } from '@/apis/post';
import useImageUpload from '@/hooks/useImageUpload';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import PostEditor, { hashTagsAtom } from '@/components/atoms/Editor/PostEditor';
import AttachButtons from '@/components/molecules/Post/AttachButtons';
import styles from '@/components/organisms/AddPost/AddPost.module.scss';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { PAGE_NAMES } from '@/constants/PageNames';
import ImageSection from '@/components/organisms/ImageSection';

function AddPost({
  postId,
  imageUrls = [],
  hashtags = [],
  content = '',
  work = 'add',
}: postProps) {
  const router = useRouter();
  const methods = useForm();
  const handleSubmit = useSubmitPost();
  const handleUpdate = useUpdatePost();
  const [image, setImage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [hashTags, setHashTags] = useAtom(hashTagsAtom);
  const { handleUploadImageToS3 } = useImageUpload();

  const init = () => {
    if (imageUrls.length > 0) {
      setImage(imageUrls[0]);
      setDisabled(false);
    }
    if (hashtags.length > 0) {
      setHashTags(hashtags);
      setDisabled(false);
    }
    methods.setValue('content', content);
  };

  const reset = () => {
    handleImageDelete();
    methods.reset({ content: '' });
    setHashTags([]);
  };

  const onSubmit = async (param: submitPostProps) => {
    if (image) {
      const imageUrl = image.startsWith('data')
        ? await handleUploadImageToS3()
        : image;
      param.imageUrls = [imageUrl as string];
    } else {
      param.imageUrls = [];
    }

    param.hashTags = hashTags;

    if (work === 'update') {
      const result = await handleUpdate.mutateAsync({
        id: postId as string,
        param: param,
      });
      if (result === 204) {
        router.replace(`/post/${postId}`);
      }
    } else {
      const result = await handleSubmit.mutateAsync({ param: param });
      if (result) {
        router.replace(`/post/${result.id}`);
      }
    }
  };

  useEffect(() => {
    if (work === 'update') init();
    return () => {
      reset();
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
    setDisabled(e.target.value === '');

  const handleImageChange = (image: string) => setImage(image);

  const handleImageDelete = () => setImage('');

  return (
    <div className={commonStyles.wrapper}>
      <BackButtonHeader
        pageName={
          work === 'update'
            ? PAGE_NAMES.POST.UPDATE_POST
            : PAGE_NAMES.POST.ADD_POST
        }
      />
      <FormProvider {...methods}>
        <form
          className={styles.wrapper}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <PostEditor name="content" handleChange={handleChange} />
          <ImageSection imageSrc={image} onDelete={handleImageDelete} />
          <div className={styles.inWrapper}>
            <AttachButtons onImageChange={handleImageChange} />
            <ConfirmButton title="게시하기" type="submit" disabled={disabled} />
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddPost;
