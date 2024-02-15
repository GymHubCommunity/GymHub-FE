import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import ImageDeleteButton from '@/components/atoms/Button/ImageDeleteButton';
import PostEditor from '@/components/atoms/Editor/PostEditor';
import AttachButtons from '@/components/molecules/Post/AttachButtons';
import styles from '@/components/organisms/AddPost/AddPost.module.scss';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { PAGE_NAMES } from '@/constants/PageNames';
import Image from 'next/image';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function AddPost() {
  const [image, setImage] = useState('');
  const [disabled, setDisabled] = useState(true);
  const methods = useForm();

  //TODO: content :string , imageURL: string[] , hashtags : string[] (값이 없을 경우 빈배열로 )
  const onSubmit = (data: any) => {
    // 폼 제출(submit) 로직을 여기에 구현합니다.
    console.log('data : ', data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDisabled(e.target.value.trim() === '');
  };

  const handleImageChange = (image: string) => {
    setImage(image);
  };

  const handleImageDelete = () => {
    setImage('');
  };

  return (
    <div className={commonStyles.wrapper}>
      <BackButtonHeader pageName={PAGE_NAMES.POST.ADD_POST} />
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
                height={289}
                src={image}
                alt="게시글 첨부사진"
              ></Image>
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
