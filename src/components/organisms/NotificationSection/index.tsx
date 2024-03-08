import { useGetPending } from '@/apis/Query/Follow';
import FollowList from '@/components/molecules/FollowList';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/NotificationSection/NotificationSection.module.scss';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function NotificationSection() {
  const { pending, nextPending, fetchNextPending } = useGetPending();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && nextPending) {
      fetchNextPending();
    }
  }, [inView]);
  return (
    <div className={commonStyles.wrapper}>
      <BackButtonHeader pageName="알림" />
      <div className={styles.followWrapper}>
        {pending?.pages.map((val) => (
          <FollowList
            key={val.id}
            id={val.memberId}
            followId={val.id}
            profileUrl={val.profileUrl}
            name={val.nickname}
          />
        ))}
        <div ref={ref} />
      </div>
    </div>
  );
}

export default NotificationSection;
