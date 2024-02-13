import BackIconSvg from '@/assets/icons/BackIconSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecordsHeader/EditRecordsHeader.module.scss';

function EditRecordsHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.svgWrapper}>
        <BackIconSvg />
      </div>
      <Text records="modalTitle">운동 기록 수정</Text>
    </div>
  );
}

export default EditRecordsHeader;
