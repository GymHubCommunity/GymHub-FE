import ToggleMenu from '@/components/atoms/Button/ToggleMenu';

import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/PostProfile/PostProfile.module.scss';
import { WriterInfoProps } from '@/types/GetPost';
import Link from 'next/link';
import useLoginUser from '@/hooks/useLoginUser';

interface PostProfileProps {
  type: 'default' | 'exercised';
  postProfile: WriterInfoProps;
  postId: number;
}

function PostProfile({ type, postProfile, postId }: PostProfileProps) {
  const [loginUser] = useLoginUser();
  if (!postProfile) return;
  const memberId = postProfile.writerId;

  return (
    <div className={styles.wrapper}>
      <Link href={`/members/${memberId}`} className={styles.inWrapper}>
        <ProfileImg imgUrl={postProfile.profileUrl} size={46} />
        <div className={styles.profile}>
          <Text post="userName">{postProfile.nickname}</Text>
          {type === 'exercised' && (
            <Text post="exerciseCompletedTime">3시간 전 운동 완료!</Text>
          )}
        </div>
      </Link>
      {loginUser?.id === memberId ? <ToggleMenu type="post" id={postId} /> : ''}
    </div>
  );
}

export default PostProfile;
