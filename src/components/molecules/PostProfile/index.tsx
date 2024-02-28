import ToggleMenu from '@/components/atoms/Button/ToggleMenu';

import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/PostProfile/PostProfile.module.scss';
import { WriterInfoProps } from '@/types/GetPost';
import { atom, useSetAtom } from 'jotai';
import Link from 'next/link';

export const userIdAtom = atom(0);

interface PostProfileProps {
  type: 'default' | 'exercised';
  postProfile: WriterInfoProps;
  close: () => void;
  toggle: () => void;
}

function PostProfile({ type, postProfile, close, toggle }: PostProfileProps) {
  const setUserId = useSetAtom(userIdAtom);

  if (!postProfile) return;

  const userId = postProfile.writerId;

  const handleUserId = (userId: number) => {
    setUserId(userId);
  };

  return (
    <div className={styles.wrapper}>
      <Link
        href={'/mypage'}
        className={styles.inWrapper}
        onClick={() => handleUserId(userId)}
      >
        <ProfileImg imgUrl={postProfile.profileUrl} size={46} />
        <div className={styles.profile}>
          <Text post="userName">{postProfile.nickname}</Text>
          {type === 'exercised' && (
            <Text post="exerciseCompletedTime">3시간 전 운동 완료!</Text>
          )}
        </div>
      </Link>
      {/* <ToggleMenu type="post" /> */}
      <ToggleMenu toggle={toggle} close={close} />
    </div>
  );
}

export default PostProfile;
