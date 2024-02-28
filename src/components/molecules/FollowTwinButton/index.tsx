import FollowButton from '@/components/atoms/Button/FollowButton';
import styles from '@/components/molecules/FollowTwinButton/FollowTwinButton.module.scss';

function FollowTwinButton() {
  return (
    <div className={styles.wrapper}>
      <FollowButton target="follower" />
      <FollowButton target="following" />
    </div>
  );
}

export default FollowTwinButton;
