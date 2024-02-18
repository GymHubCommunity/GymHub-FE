'use client';

import {
  postUnfollow,
  postFollow,
  postFollower,
  deleteFollower,
  getFollowings,
  getFollowers,
} from '@/apis/followController';

function FollowExample() {
  const postFollowRequest = async () => {
    try {
      const userId = 3;
      const result = await postFollow({ id: userId });
      const status = result.status;
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const postUnfollowRequest = async () => {
    try {
      const userId = 2;
      const result = await postUnfollow({ id: userId });
    } catch (error) {
      console.error('Error sending unfollow request:', error);
    }
  };

  const getFollowingsRequest = async () => {
    try {
      const userId = 2;
      const result = await getFollowings({ id: userId });
      const follows = result.follows;
      const followsNum = follows.length;
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const getFollowersRequest = async () => {
    try {
      const userId = 2;
      const result = await getFollowers({ id: userId });
      const follows = result.follows;
      const followsNum = follows.length;
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const postFollowerRequest = async () => {
    try {
      const userId = 1;
      const result = await postFollower({ id: userId });
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  const deleteFollowerRequest = async () => {
    try {
      const userId = 1;
      const result = await deleteFollower({ id: userId });
    } catch (error) {
      console.error('Error sending follow request:', error);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={getFollowingsRequest}
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

export default FollowExample;
