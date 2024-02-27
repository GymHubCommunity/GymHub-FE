import styles from '@/components/atoms/CountInfo/CountInfo.module.scss';

interface CountInfoProps {
  type: 'default' | 'follow' | 'day';
  content: string;
  count?: string | number;
}

function CountInfo({ type, content, count }: CountInfoProps) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.info}>{content}</p>
      {type == 'default' && <p className={styles.count}>{count}</p>}
      {type === 'follow' && <p className={styles.count}>{count}명</p>}
      {type === 'day' && <p className={styles.count}>{count}일</p>}
    </div>
  );
}

export default CountInfo;
