import {
  useApproveFollow,
  useDeleteFollow,
  usePostFollow,
  usePostUnfollow,
} from '@/apis/Query/Follow';
import { followButtonAtom } from '@/components/atoms/Button/FollowButton';
import FollowToggleButton from '@/components/atoms/Button/FollowToggleButton';
import styles from '@/components/molecules/FollowList/FollowList.module.scss';
import { useAtomValue } from 'jotai';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface FollowListProps {
  id: number;
  followId: number;
  profileUrl: string;
  name: string;
}

function FollowList({ id, followId, profileUrl, name }: FollowListProps) {
  const [followingContent, setFollowingContent] = useState('팔로잉');
  const followButton = useAtomValue(followButtonAtom);

  const { postFollow } = usePostFollow({ memberId: id });
  const { postUnfollow } = usePostUnfollow({ memberId: id });

  const { approveFollow } = useApproveFollow({ followId: followId });
  const { deleteFollow } = useDeleteFollow({ followId: followId });

  console.log(followId);

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
      <img src={profileUrl} alt="프로필 이미지" className={styles.img} />
      <div className={styles.followWrapper}>
        <p className={styles.follow}>팔로우 요청</p>
        <p className={styles.name}>{name}</p>
      </div>
      {pathName.startsWith('/follow') ? (
        followButton === 'follower' ? (
          <FollowToggleButton onClick={deleteFollow}>삭제</FollowToggleButton>
        ) : (
          <FollowToggleButton onClick={handleFollow}>
            {followingContent}
          </FollowToggleButton>
        )
      ) : (
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
