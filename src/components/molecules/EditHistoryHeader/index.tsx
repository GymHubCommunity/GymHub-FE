import BackIconSvg from '@/assets/icons/BackIconSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditHistoryHeader/EditHistoryHeader.module.scss';

function EditHistoryHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.svgWrapper}>
        <BackIconSvg />
      </div>
      <Text history="modalTitle">운동 기록 수정</Text>
    </div>
  );
}

export default EditHistoryHeader;
