import ArrowBackSvg from '@/assets/icons/ArrowBackSvg';
import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import UserRoutine, { UserRoutineProps } from '@/components/atoms/UserRoutine';
import styles from '@/components/molecules/UserRoutineArticle/UserRoutineArticle.module.scss';
import useToggleMenu from '@/hooks/useToggleMenu';
import { usePathname } from 'next/navigation';

function UserRoutineArticle({ name, date }: UserRoutineProps) {
  const pathName = usePathname();
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu();
  
  return (
    <div className={styles.wrapper}>
      <UserRoutine name={name} date={date} />
      {pathName === '/records' ? (
        <>
          <ToggleMenu close={closeMenu} toggle={toggleMenu} />

          {/* <div className={styles.modalWrapper}>
            {isOpen && <ToggleItems type="records" />}
          </div> */}
        </>
      ) : (
        <button onClick={() => console.log(`${name} 루틴 보러가기`)}>
          <ArrowBackSvg />
        </button>
      )}
    </div>
  );
}

export default UserRoutineArticle;
