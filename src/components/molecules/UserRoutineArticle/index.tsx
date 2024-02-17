import ArrowBackSvg from '@/assets/icons/ArrowBackSvg';
import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import UserRoutine, { UserRoutineProps } from '@/components/atoms/UserRoutine';
import styles from '@/components/molecules/UserRoutineArticle/UserRoutineArticle.module.scss';
import { usePathname } from 'next/navigation';

function UserRoutineArticle({ name, date }: UserRoutineProps) {
  const pathName = usePathname();
  return (
    <div className={styles.wrapper}>
      <UserRoutine name={name} date={date} />
      {pathName === '/records' ? (
        <ToggleMenu type="records" />
      ) : (
        <button onClick={() => console.log(`${name} 루틴 보러가기`)}>
          <ArrowBackSvg />
        </button>
      )}
    </div>
  );
}

export default UserRoutineArticle;
