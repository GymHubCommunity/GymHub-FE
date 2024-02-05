import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import Name from '@/components/atoms/Name';
import PostContent from '@/components/atoms/PostContent';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/PostProfile/PostProfile.module.scss';

interface PostProfileProps {
  postProfile: {
    imgUrl: string;
    name: string;
    workOutTime: string;
  };
}

function PostProfile({ postProfile }: PostProfileProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <ProfileImg imgUrl={postProfile.imgUrl} size={57} />
        <div className={styles.profile}>
          <Name name={postProfile.name} size="lg" />
          <PostContent type="workOut" workOutTime={postProfile.workOutTime} />
        </div>
      </div>
      <ToggleMenu type="post" />
    </div>
  );
}

export default PostProfile;
