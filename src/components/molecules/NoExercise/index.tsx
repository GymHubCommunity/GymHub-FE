import DirectInputButton from '@/components/atoms/Button/DirectInputButton';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/NoExercise/NoExercise.module.scss';

function NoExercise() {
  return (
    <div className={styles.wrapper}>
      <Text records="noExercise">
        찾는 운동이
        <br />
        항목에 없으신가요?
      </Text>
      <DirectInputButton />
    </div>
  );
}

export default NoExercise;
