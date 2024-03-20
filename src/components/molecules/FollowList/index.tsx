import {
  useApproveFollow,
  useDeleteFollow,
  usePostFollow,
  usePostUnfollow,
} from '@/apis/Query/Follow';
import { followButtonAtom } from '@/components/atoms/Button/FollowButton';
import FollowToggleButton from '@/components/atoms/Button/FollowToggleButton';
import styles from '@/components/molecules/FollowList/FollowList.module.scss';
import useLoginUser from '@/hooks/useLoginUser';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface FollowListProps {
  id: number;
  followId: number;
  memberId?: number;
  profileUrl: string;
  name: string;
}

function FollowList({
  id,
  memberId,
  followId,
  profileUrl,
  name,
}: FollowListProps) {
  const [followingContent, setFollowingContent] = useState('팔로잉');
  const followButton = useAtomValue(followButtonAtom);

  const { postFollow } = usePostFollow({ memberId: id });
  const { postUnfollow } = usePostUnfollow({ memberId: id });

  const { approveFollow } = useApproveFollow({ followId: followId });
  const { deleteFollow } = useDeleteFollow({ followId: followId });

  const [loginUser] = useLoginUser();

  const isUser = loginUser?.id === memberId;

  const pathName = usePathname();

  const handleFollow = () => {
    if (followingContent === '팔로잉') {
      setFollowingContent('팔로우');
      postUnfollow();
    } else {
      setFollowingContent('팔로잉');
      postFollow();
    }
  };

  return (
    <div className={styles.wrapper}>
      <Link href={`/members/${id}`}>
        <img src={profileUrl} alt="프로필 이미지" className={styles.img} />
      </Link>
      <div className={styles.followWrapper}>
        {pathName === 'notification' && (
          <p className={styles.follow}>팔로우 수락</p>
        )}
        <p className={styles.name}>{name}</p>
      </div>
      {isUser ? (
        pathName.startsWith('/follow') &&
        (followButton === 'follower' ? (
          <FollowToggleButton onClick={deleteFollow}>삭제</FollowToggleButton>
        ) : (
          <FollowToggleButton onClick={handleFollow}>
            {followingContent}
          </FollowToggleButton>
        ))
      ) : (
        <div />
      )}
      {pathName === '/notification' && (
        <div className={styles.buttonWrapper}>
          <button className={styles.accept} onClick={() => approveFollow()}>
            수락
          </button>
          <button className={styles.deny} onClick={() => deleteFollow()}>
            거절
          </button>
        </div>
      )}
    </div>
  );
}

export default FollowList;
