import commonStyles from '@/components/organisms/Common.module.scss';
import styles from '@/components/organisms/RecordAddSection/RecordAddSection.module.scss';
import LowerImg from '@/public/icons/Lower.svg';
import UpperImg from '@/public/icons/Upper.svg';
import WholeImg from '@/public/icons/Whole.svg';

import PostConfirmButton from '@/components/atoms/Button/ConfirmButton';
import ImageButton from '@/components/atoms/Button/ImageButton';
import Input from '@/components/atoms/Input';
import NoExercise from '@/components/molecules/NoExercise';
import BackButtonHeader from '../Header/BackButtonHeader';

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
              <ImageButton imgSrc={UpperImg} alt={'상체'} />
              <ImageButton imgSrc={LowerImg} alt={'하체'} />
              <ImageButton imgSrc={WholeImg} alt={'전신'} />
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
