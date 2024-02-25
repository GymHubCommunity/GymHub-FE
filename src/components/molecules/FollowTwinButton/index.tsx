import FollowButton from '@/components/atoms/Button/FollowButton';

function FollowTwinButton() {
  return (
    <>
      <FollowButton target="follower" />
      <FollowButton target="following" />
    </>
  );
}

export default FollowTwinButton;
