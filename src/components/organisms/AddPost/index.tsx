import PostConfirmButton from '@/components/atoms/Button/PostConfirmButton';
import PostEditor from '@/components/atoms/Editor/PostEditor';
import AttachButtons from '@/components/molecules/Post/AttachButtons';
import styles from '@/components/organisms/AddPost/AddPost.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import { PAGE_NAMES } from '@/constants/PageNames';

function AddPost() {
  return (
    <>
      <BackButtonHeader pageName={PAGE_NAMES.POST.ADD_POST} />
      <div className={styles.wrapper}>
        <PostEditor />
        <div className={styles.inWrapper}>
          <AttachButtons />
          <PostConfirmButton
            title="게시하기"
            onClick={() => console.log('confirm')}
          />
        </div>
      </div>
    </>
  );
}

export default AddPost;
