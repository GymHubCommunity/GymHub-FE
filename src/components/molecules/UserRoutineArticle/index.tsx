import ArrowBackSvg from '@/assets/icons/ArrowBackSvg';
import UserRoutine, { nameProp } from '@/components/atoms/UserRoutine';
import styles from '@/components/molecules/UserRoutineArticle/UserRoutineArticle.module.scss';

function UserRoutineArticle({ name }: nameProp) {
  return (
    <div className={styles.wrapper}>
      <UserRoutine name={name} />
      <button onClick={() => console.log(`${name} 루틴 보러가기`)}>
        <ArrowBackSvg />
      </button>
    </div>
  );
}

export default UserRoutineArticle;
