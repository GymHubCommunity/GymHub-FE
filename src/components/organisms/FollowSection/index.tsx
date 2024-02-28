import { useGetFollowers, useGetFollowings } from '@/apis/Query/Follow';
import { followButtonAtom } from '@/components/atoms/Button/FollowButton';
import FollowList from '@/components/molecules/FollowList';
import styles from '@/components/organisms/FollowSection/FollowSection.module.scss';

import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

interface Prop {
  memberId: number;
}

function FollowSection({ memberId }: Prop) {
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
    <div className={styles.wrapper}>
      {(followButton === 'follower' ? followers : followings)?.pages.map(
        (val) => (
          <div key={val.id} className={styles.followWrapper}>
            <FollowList
              id={val.memberId}
              profileUrl={val.profileUrl}
              name={val.nickname}
            />
          </div>
        ),
      )}
      <div ref={ref} />
    </div>
  );
}

export default FollowSection;
