import ArrowBackSvg from '@/assets/icons/ArrowBackSvg';
import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import UserRoutine, { UserRoutineProps } from '@/components/atoms/UserRoutine';
import styles from '@/components/molecules/UserRoutineArticle/UserRoutineArticle.module.scss';
import { usePathname } from 'next/navigation';

interface Props {
  name: string;
  date: Date;
  close: () => void;
  toggle: () => void;
}

function UserRoutineArticle({ name, date, close, toggle }: Props) {
  const pathName = usePathname();

  return (
    <div className={styles.wrapper}>
      <UserRoutine name={name} date={date} />
      {pathName === ('/records' || '/snapshot') ? (
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
