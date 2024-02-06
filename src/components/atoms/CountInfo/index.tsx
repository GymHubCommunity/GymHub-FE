import styles from '@/components/atoms/Info/Info.module.scss';

interface CountInfoProps {
  type: 'default' | 'follow';
  content: string;
  count: string;
}

function CountInfo({ type, content, count }: CountInfoProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.info}>{content}</p>
      {type === 'default' ? (
        <p className={styles.info}>{count}</p>
      ) : (
        <p className={styles.info}>{count}명</p>
      )}
    </div>
  );
}

export default CountInfo;