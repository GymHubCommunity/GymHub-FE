import styles from '@/components/atoms/Button/FollowButton/FollowButton.module.scss';
import useFollowButton from '@/hooks/useFollowButton';
import { useRouter } from 'next/navigation';

function FollowButton({ target }) {
  const router = useRouter();
  const content = target === 'follower' ? '팔로워' : '팔로잉';
  const { follower, following, updateToFollower, updateToFollowing } =
    useFollowButton();
  const isActive = target === 'follower' ? follower : following;
  const handleUpdate =
    target === 'follower' ? updateToFollower : updateToFollowing;

  const handleFollow = () => {
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
