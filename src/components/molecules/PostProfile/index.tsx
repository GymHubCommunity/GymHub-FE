import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/PostProfile/PostProfile.module.scss';

interface PostProfileProps {
  type: 'default' | 'exercised';
  postProfile: {
    imgUrl: string;
    name: string;
    workOutTime: string;
  };
}

function PostProfile({ type, postProfile }: PostProfileProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <ProfileImg imgUrl={postProfile.imgUrl} size={46} />
        <div className={styles.profile}>
          <Text post="userName">{postProfile.name}</Text>
          {type === 'exercised' && (
            <Text post="exerciseCompletedTime">
              {postProfile.workOutTime}시간 전 운동 완료!
            </Text>
          )}
        </div>
      </div>
      <ToggleMenu type="post" />
    </div>
  );
}

export default PostProfile;
