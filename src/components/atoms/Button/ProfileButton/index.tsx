import { usePostFollow, usePostUnfollow } from '@/apis/Query/Follow';
import styles from '@/components/atoms/Button/ProfileButton/ProfileButton.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface ProfileButton {
  type: 'profileUpdate' | 'follow';
  memberId: number;
  isFollow: boolean;
}

function ProfileButton({ type, memberId, isFollow }: ProfileButton) {
  const [followingContent, setFollowingContent] = useState('');
  const { postFollow } = usePostFollow({ memberId });
  const { postUnfollow } = usePostUnfollow({ memberId });

  const handleFollow = () => {
    if (followingContent === '팔로우') {
      setFollowingContent('팔로우 취소');
      postFollow();
    }
    if (followingContent === '팔로우 취소') {
      setFollowingContent('팔로우');
      postUnfollow();
    }
  };

  useEffect(() => {
    isFollow
      ? setFollowingContent('팔로우')
      : setFollowingContent('팔로우 취소');
  }, [isFollow]);

  return (
    <>
      {type === 'profileUpdate' ? (
        <Link href={`/editprofile/${memberId}`} className={styles.button}>
          프로필 수정하기
        </Link>
      ) : (
        <button
          className={
            followingContent === '팔로우' ? styles.follow : styles.followCancel
          }
          onClick={handleFollow}
        >
          {followingContent}
        </button>
      )}
    </>
  );
}

export default ProfileButton;
