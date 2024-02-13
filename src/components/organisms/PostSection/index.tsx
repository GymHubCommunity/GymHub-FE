import PostArticle from '@/components/molecules/PostArticle';
import Profile from '@/components/molecules/Profile';
import RoutineArticle from '@/components/molecules/RoutineArticle';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import { profile } from '@/constants/MockData';
import { usePathname } from 'next/navigation';

function PostSection() {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      {pathName === '/mypage' ? (
        <>
          <BackButtonHeader pageName={profile.name} />
          <Profile profile={profile} />
        </>
      ) : (
        <>
          <BackButtonHeader pageName={'게시글 상세 보기'} />
        </>
      )}
      <div className={styles.inWrapper}>
        <div className={styles.postWrapper}>
          <PostArticle />
        </div>
        <div className={styles.routineWrapper}>
          <RoutineArticle />
        </div>
      </div>
    </div>
  );
}

export default PostSection;