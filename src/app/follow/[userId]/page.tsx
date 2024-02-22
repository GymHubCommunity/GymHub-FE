'use client';

import { useParams } from 'next/navigation';
import {
  getFollowers,
  getFollowings,
  deleteFollower,
  postFollow,
  postUnfollow,
} from '@/apis/followController';
import { useEffect, useState } from 'react';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import FollowButton from '@/components/atoms/Button/FollowButton';
import useFollowButton from '@/hooks/useFollowButton';
import Footer from '@/components/organisms/Footer';
import FollowList from '@/components/molecules/FollowList';

function FollowPage() {
  const { userId } = useParams();
  const size = 10;
  const { follower } = useFollowButton();
  const [follows, setFollows] = useState([]);
  const [hasNext, setHasNext] = useState(true);
  const [lastId, setLastId] = useState(-1);

  const getFollowersRequest = async () => {
    try {
      const result = await getFollowers({
        id: userId as string,
        lastId: lastId,
        size: size,
      });
      setFollows(result.follows);
      setHasNext(result.hasNext);
      setLastId(lastId + size);
      console.log(result);
    } catch (error) {
      console.error('Error getting followers request:', error);
    }
  };

  const getFollowingsRequest = async () => {
    try {
      const result = await getFollowings({
        id: userId as string,
        lastId: lastId,
        size: size,
      });
      setFollows(result.follows);
      setHasNext(result.hasNext);
      setLastId(lastId + size);
      console.log(result);
    } catch (error) {
      console.error('Error getting followers request:', error);
    }
  };

  const handleDelete = (id) => {
    deleteFollower(id);
  };

  const handleFollow = (id) => {
    postFollow(id);
  };

  useEffect(() => {
    if (follower) getFollowersRequest();
    else getFollowingsRequest();
  }, [follower]);

  return (
    <>
      <BackButtonHeader pageName="궁수" />
      <FollowButton target="follower" />
      <FollowButton target="following" />
      {/*팔로우 팔로잉 페이지 분리*/}
      {follows?.map((val) => (
        <div key={val.id} onClick={() => handleDelete(val.id)}>
          <FollowList
            profileUrl={val.profileUrl}
            name={val.id}
            onClick={follower ? handleDelete(val.id) : handleFollow(val.id)}
            content={follower ? '삭제' : '팔로우'}
          />
        </div>
      ))}
      <FollowList
        profileUrl="https://avatars.githubusercontent.com/u/52947668?v=4"
        name="포시"
        onClick={handleDelete(1)}
        content="삭제"
      />
    </>
  );
}

export default FollowPage;
