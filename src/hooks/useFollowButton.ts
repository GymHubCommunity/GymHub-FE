import { atom, useAtom } from 'jotai';

const followerAtom = atom(true);
const followingAtom = atom(false);

function useFollowButton() {
  const [follower, setFollower] = useAtom(followerAtom);
  const [following, setFollowing] = useAtom(followingAtom);
  const updateToFollower = () => {
    setFollower(true);
    setFollowing(false);
  };
  const updateToFollowing = () => {
    setFollower(false);
    setFollowing(true);
  };
  return { follower, following, updateToFollower, updateToFollowing };
}

export default useFollowButton;
