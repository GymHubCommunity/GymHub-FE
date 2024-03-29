import styles from '@/components/atoms/Button/FollowButton/FollowButton.module.scss';
import useFollowButton from '@/hooks/useFollowButton';
import { atom, useSetAtom } from 'jotai';

export const followButtonAtom = atom('follower');

interface FollowButtonProp {
  target: 'follower' | 'following';
}

function FollowButton({ target }: FollowButtonProp) {
  const setFollowButton = useSetAtom(followButtonAtom);

  const content = target === 'follower' ? '팔로워' : '팔로잉';
  const { follower, following, updateToFollower, updateToFollowing } =
    useFollowButton();
  const isActive = target === 'follower' ? follower : following;
  const handleUpdate =
    target === 'follower' ? updateToFollower : updateToFollowing;

  const handleFollow = () => {
    setFollowButton(target);
    handleUpdate();
  };

  return (
    <button
      type="button"
      className={isActive ? styles.active : styles.inactive}
      onClick={handleFollow}
    >
      {content}
    </button>
  );
}

export default FollowButton;
