import styles from '@/components/atoms/PostContent/PostContent.module.scss';

interface PostContentProps {
  type: 'default' | 'workOut';
  content?: string;
  workOutTime?: string;
}

function PostContent({
  type = 'default',
  content,
  workOutTime,
}: PostContentProps) {
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

export default PostContent;
