import { useGetFollowers, useGetFollowings } from '@/apis/Query/Follow';
import ProfileButton from '@/components/atoms/Button/ProfileButton';
import Info from '@/components/atoms/CountInfo';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/Profile/Profile.module.scss';
import Link from 'next/link';

interface ProfileProps {
  profileImg?: string;
  postCount?: number;
  exerciseDays?: number;
  memberId: number;
}

function Profile({
  profileImg,
  postCount,
  exerciseDays,
  memberId,
}: ProfileProps) {
  const { followers } = useGetFollowers(memberId);
  const { followings } = useGetFollowings(memberId);

  return (
    <div className={styles.wrapper}>
      {profileImg && <ProfileImg imgUrl={profileImg} size={74} />}
      <div className={styles.inWrapper}>
        <div className={styles.infoWrapper}>
          <Info type="default" content="게시글" count={postCount} />
          <Info type="day" content="운동 일수" count={exerciseDays} />
          <Link href={`/follow/${memberId}`}>
            <Info
              type="follow"
              content="팔로우"
              count={followers?.pages.length}
            />
          </Link>
          <Link href={`/follow/${memberId}`}>
            <Info
              type="follow"
              content="팔로잉"
              count={followings?.pages.length}
            />
          </Link>
        </div>
        <ProfileButton type="profileUpdate" />
      </div>
    </div>
  );
}

export default Profile;
