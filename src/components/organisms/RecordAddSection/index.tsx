import PostConfirmButton from '@/components/atoms/Button/ConfirmButton';
import ImageButton from '@/components/atoms/Button/ImageButton';
import Input from '@/components/atoms/Input';
import NoExercise from '@/components/molecules/NoExercise';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/RecordAddSection/RecordAddSection.module.scss';
import LowerImg from '@/public/images/Lower.png';
import UpperImg from '@/public/images/Upper.png';
import WholeImg from '@/public/images/Whole.png';

interface RecordAddSectionProp {
  type: 'add' | 'direct';
}

function RecordAddSection({ type }: RecordAddSectionProp) {
  return (
    <div className={commonStyles.wrapper}>
      <BackButtonHeader
        pageName={type === 'add' ? '운동 추가' : '직접 입력하기'}
      />
      <div className={styles.inputWrapper}>
        {type === 'add' ? (
          <>
            <Input type="workOut" />
            <div className={styles.button}>
              <ImageButton imgSrc={UpperImg} alt={'상체'} path="/records/select/upper" />
              <ImageButton imgSrc={LowerImg} alt={'하체'} path="/records/select/lower"/>
              <ImageButton imgSrc={WholeImg} alt={'전신'} path="/records/select/whole"/>
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
    </div>
  );
}

export default RecordAddSection;
