import { useGetFollowers, useGetFollowings } from '@/apis/Query/Follow';
import { followButtonAtom } from '@/components/atoms/Button/FollowButton';
import FollowList from '@/components/molecules/FollowList';
import styles from '@/components/organisms/FollowSection/FollowSection.module.scss';

import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const memberId = 1;

function FollowSection() {
  const followButton = useAtomValue(followButtonAtom);

  const { followers, fetchNextFollowers, nextFollowers } =
    useGetFollowers(memberId);
  const { followings, fetchNextFollowing, nextFollowings } =
    useGetFollowings(memberId);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (followButton === 'followers') {
      if (inView && nextFollowers) {
        fetchNextFollowers();
      }
    } else {
      if (inView && nextFollowings) {
        fetchNextFollowing();
      }
    }
  }, [inView]);

  return (
    <>
      <div className={styles.wrapper}>
        {(followButton === 'follower' ? followers : followings)?.pages.map(
          (val) => (
            <div key={val.id} className={styles.followWrapper}>
              <FollowList
                id={val.id}
                profileUrl={val.profileUrl}
                name={val.nickname}
              />
            </div>
          ),
        )}
        <div ref={ref} />
      </div>
    </>
  );
}

export default FollowSection;
