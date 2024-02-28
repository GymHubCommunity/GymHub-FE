import {
  useDeleteFollow,
  usePostFollow,
  usePostUnfollow,
} from '@/apis/Query/Follow';
import { followButtonAtom } from '@/components/atoms/Button/FollowButton';
import FollowToggleButton from '@/components/atoms/Button/FollowToggleButton';
import styles from '@/components/molecules/FollowList/FollowList.module.scss';
import { useAtomValue } from 'jotai';
import { useState } from 'react';

interface FollowListProps {
  id: number;
  profileUrl: string;
  name: string;
}

function FollowList({ id, profileUrl, name }: FollowListProps) {
  const [followingContent, setFollowingContent] = useState('팔로잉');
  const followButton = useAtomValue(followButtonAtom);
  const { deleteFollow } = useDeleteFollow({ memberId: id });

  const { postFollow } = usePostFollow({ memberId: id });
  const { postUnfollow } = usePostUnfollow({ memberId: id });

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
      <p className={styles.name}>{name}</p>
      {followButton === 'follower' ? (
        <FollowToggleButton onClick={deleteFollow}>삭제</FollowToggleButton>
      ) : (
        <FollowToggleButton onClick={handleFollow}>
          {followingContent}
        </FollowToggleButton>
      )}
    </div>
  );
}

export default FollowList;
