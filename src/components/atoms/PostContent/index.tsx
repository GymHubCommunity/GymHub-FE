import styles from '@/components/atoms/PostContent/PostContent.module.scss';

interface PostContentProps {
  type: 'default' | 'workOut' | 'search';
  content?: string;
  workOutTime?: string;
  searchCount?: number;
}

function PostContent({
  type = 'default',
  content,
  workOutTime,
  searchCount,
}: PostContentProps) {
  switch (type) {
    case 'workOut':
      return (
        <p className={styles.content}>오늘 {workOutTime}시간 전 운동 완료!</p>
      );
    case 'search':
      return <p className={styles.content}>검색결과 {searchCount}건</p>;
    default:
      return <p className={styles.content}>{content}</p>;
  }
}

export default PostContent;
