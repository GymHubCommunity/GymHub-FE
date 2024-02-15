import {
  postUnfollow,
  postFollow,
  postFollower,
  deleteFollower,
  getFollowings,
  getFollowers,
} from '@/apis/followController';

function followExample() {
  const postFollowRequest = async () => {
    try {
      const userId = 2;
      const result = await postFollow({ id: userId });
      const status = result.status;
      console.log(status);
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const postUnfollowRequest = async () => {
    try {
      const userId = 2;
      const result = await postUnfollow({ id: userId });
      console.log('Successfully unfollowed');
    } catch (error) {
      console.error('Error sending unfollow request:', error);
    }
  };

  const getFollowingsRequest = async () => {
    try {
      const userId = 2;
      const result = await getFollowings({ id: userId });
      console.log('Followings:', result);
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const getFollowersRequest = async () => {
    try {
      const userId = 2;
      const result = await getFollowers({ id: userId });
      console.log('Followers: ', result);
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const postFollowerRequest = async () => {
    try {
      const userId = 1;
      const result = await postFollower({ id: userId });
      console.log('Follower request successful');
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const deleteFollowerRequest = async () => {
    try {
      const userId = 2;
      const result = await deleteFollower({ id: userId });
      console.log('Follow request successful');
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={postFollowRequest}
        style={{
          backgroundColor: 'white',
          color: 'black',
          padding: '10px 20px',
        }}
      >
        follow 요청
      </button>
    </>
  );
}

export default followExample;
