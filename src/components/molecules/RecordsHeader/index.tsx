import DumbbellSvg from '@/assets/icons/DumbbellSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/RecordsHeader/RecordsHeader.module.scss';
import Link from 'next/link';

function RecordsHeader() {
  return (
    <div className={styles.wrapper}>
      <Text className={styles.headerText}>운동 기록</Text>
      <Link href="/snapshot">
        <DumbbellSvg type={'menu'} size={24} />
      </Link>
    </div>
  );
}

export default RecordsHeader;
