import styles from '@/components/atoms/Content/Content.module.scss';

interface ContentProp {
  type: 'default' | 'workOut';
  content?: string;
  workOutTime?: string;
}

function Content({ type = 'default', content, workOutTime }: ContentProp) {
  return (
    <>
      {type === 'workOut' ? (
        <p className={styles.content}>오늘 {workOutTime}시간 전 운동 완료!</p>
      ) : (
        <p className={styles.content}>{content}</p>
      )}
    </>
  );
}

export default Content;
