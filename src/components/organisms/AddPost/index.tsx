import { submitPostProps, postProps } from '@/apis/post';
import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import ImageDeleteButton from '@/components/atoms/Button/ImageDeleteButton';
import PostEditor, { hashTagsAtom } from '@/components/atoms/Editor/PostEditor';
import AttachButtons from '@/components/molecules/Post/AttachButtons';
import styles from '@/components/organisms/AddPost/AddPost.module.scss';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { PAGE_NAMES } from '@/constants/PageNames';
import useImageUpload from '@/hooks/useImageUpload';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import useUpdatePost from '@/apis/Query/useUpdatePost';
import useSubmitPost from '@/apis/Query/useSubmitPost';

function AddPost({
  postId,
  imageUrls = [],
  hashtags = [],
  content = '',
  work = 'add',
}: postProps) {
  const [image, setImage] = useState('');
  const [hashTags, setHashTags] = useAtom(hashTagsAtom);
  const [disabled, setDisabled] = useState(true);
  const methods = useForm();
  const { handleUploadImageToS3 } = useImageUpload();
  const router = useRouter();
  const handleUpdate = useUpdatePost();
  const handleSubmit = useSubmitPost();

  const init = () => {
    if (imageUrls.length > 0) setImage(imageUrls[0]);
    if (hashtags.length > 0) setHashTags(hashtags);
    methods.setValue('content', content);
  };

  const reset = () => {
    handleImageDelete();
    methods.reset({ content: '' });
    setHashTags([]);
  };

  const onSubmit = async (param: submitPostProps) => {
    if (image.startsWith('data')) {
      const imageUrl = await handleUploadImageToS3();
      if (imageUrl) {
        param.imageUrls = [imageUrl];
      }
    } else if (image.startsWith('http')) {
      param.imageUrls = [image];
    } else {
      param.imageUrls = [];
    }

    param.hashTags = hashTags;
    if (work === 'update') {
      const result = await handleUpdate.mutateAsync({
        id: postId,
        param: param,
      });
      if (result === 204) {
        router.push(`/post/${postId}`);
      }
    } else {
      const result = await handleSubmit.mutateAsync({ param: param });
      if (result) {
        router.replace(`/post/${result.id}`);
      }
    }
  };
  useEffect(() => {
    if (work === 'update') {
      init();
    }
    return () => {
      reset();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDisabled(e.target.value === '');
  };

  const handleImageChange = (image: string) => {
    setImage(image);
  };

  const handleImageDelete = () => {
    setImage('');
  };

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
          {image && (
            <div className={styles.imageWrapper}>
              <ImageDeleteButton onClick={() => handleImageDelete()} />
              <Image
                width={353}
                height={500}
                src={image}
                alt="게시글 첨부사진"
              />
            </div>
          )}
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
