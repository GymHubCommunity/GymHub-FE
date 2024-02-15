import styles from '@/components/atoms/ExerciseCount/ExerciseCount.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface ExerciseCountProp {
  count: number;
}

// 4이하 일때 형광색, 4이상 일때 보라색
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
