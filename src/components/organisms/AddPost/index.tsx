import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import PostEditor from '@/components/atoms/Editor/PostEditor';
import AttachButtons from '@/components/molecules/Post/AttachButtons';
import styles from '@/components/organisms/AddPost/AddPost.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { PAGE_NAMES } from '@/constants/PageNames';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function AddPost() {
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
  return (
    <>
      <BackButtonHeader pageName={PAGE_NAMES.POST.ADD_POST} />
      <FormProvider {...methods}>
        <form
          className={styles.wrapper}
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <PostEditor name="content" handleChange={handleChange} />
          <div className={styles.inWrapper}>
            <AttachButtons />
            <ConfirmButton title="게시하기" type="submit" disabled={disabled} />
          </div>
        </form>
      </FormProvider>
    </>
  );
}

export default AddPost;
