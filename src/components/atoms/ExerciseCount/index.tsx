import styles from '@/components/atoms/ExerciseCount/ExerciseCount.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface ExerciseCountProp {
  count: number;
}

function ExerciseCount({ count }: ExerciseCountProp) {
  let type = '';
  if (count > 4) {
    type = 'yellow';
  }
  if (count <= 4) {
    type = 'purple';
  }
  return <p className={cn('wrapper', type)}>{count}번 연속</p>;
}

export default ExerciseCount;
