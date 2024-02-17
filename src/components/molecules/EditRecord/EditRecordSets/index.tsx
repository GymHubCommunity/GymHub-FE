import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/EditRecord/EditRecordSets/EditRecordSets.module.scss';

function EditRecordSets() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.setText}>
        <Text>1세트</Text>
      </div>
      <div className={styles.inputWrapper}>
        <div className={styles.input}>
          <input value={100} />
          <p className={styles.inputText}>kg</p>
        </div>
        <div className={styles.input}>
          <input value={10} />
          <p className={styles.inputText}>회</p>
        </div>
        <button type="button" className={styles.deleteButton}>
          세트 삭제
        </button>
      </div>
    </div>
  );
}

export default EditRecordSets;
