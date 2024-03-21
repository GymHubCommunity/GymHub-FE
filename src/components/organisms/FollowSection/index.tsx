import { useGetFollowers, useGetFollowings } from '@/apis/Query/Follow';
import { followButtonAtom } from '@/components/atoms/Button/FollowButton';
import FollowList from '@/components/molecules/FollowList';
import FollowTwinButton from '@/components/molecules/FollowTwinButton';
import commonStyles from '@/components/organisms/Common.module.scss';
import styles from '@/components/organisms/FollowSection/FollowSection.module.scss';

import { useAtomValue } from 'jotai';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import BackButtonHeader from '../Header/BackButtonHeader';

interface Props {
  nickName: string;
  memberId: number;
}

function FollowSection({ nickName, memberId }: Props) {
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
    <div className={commonStyles.wrapper}>
      <BackButtonHeader pageName={nickName} />
      <FollowTwinButton />
      <div className={styles.followWrapper}>
        {(followButton === 'follower' ? followers : followings)?.pages.map(
          (val) => (
            <div key={val.id} className={styles.followWrapper}>
              <FollowList
                id={val.memberId}
                memberId={memberId}
                followId={val.id}
                profileUrl={val.profileUrl}
                name={val.nickname}
              />
            </div>
          ),
        )}
      </div>
      <div ref={ref} />
    </div>
  );
}

export default FollowSection;
