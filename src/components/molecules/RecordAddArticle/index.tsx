import PostConfirmButton from '@/components/atoms/Button/ConfirmButton';
import ImageButton from '@/components/atoms/Button/ImageButton';
import Input from '@/components/atoms/Input';
import NoExercise from '@/components/molecules/NoExercise';
import styles from '@/components/molecules/RecordAddArticle/RecordAddArticle.module.scss';
import LowerImg from '@/public/images/Lower.png';
import UpperImg from '@/public/images/Upper.png';
import WholeImg from '@/public/images/Whole.png';
import { RecordAddTypeProp } from '@/types/recordAddType';

function RecordAddArticle({ type }: RecordAddTypeProp) {
  return (
    <div className={styles.inputWrapper}>
      {type === 'add' ? (
        <>
          <Input type="workOut" />
          <div className={styles.button}>
            <ImageButton
              href={'/records/select/upper'}
              imgSrc={UpperImg}
              alt={'상체'}
            />
            <ImageButton
              href={'/records/select/lower'}
              imgSrc={LowerImg}
              alt={'하체'}
            />
            <ImageButton
              href={'/records/select/whole'}
              imgSrc={WholeImg}
              alt={'전신'}
            />
            <NoExercise />
          </div>
          <PostConfirmButton title={'선택 완료'} onClick={() => {}} />
        </>
      ) : (
        <>
          <Input type="addExercise" />
          <PostConfirmButton title={'입력 완료'} onClick={() => {}} />
        </>
      )}
    </div>
  );
}

export default RecordAddArticle;
