import LineSvg from '@/assets/icons/LineSvg';
import AddSetButton from '@/components/atoms/Button/AddSetButton';
import EditRecordName from '@/components/molecules/EditRecord/EditRecordName';
import EditRecordSets from '@/components/molecules/EditRecord/EditRecordSets';
import styles from '@/components/molecules/EditRecord/EditRecordsForm/EditRecordsForm.module.scss';

interface EditRecordsFormProps {
  name: string;
}

function EditRecordsForm({ name }: EditRecordsFormProps) {
  // @TODO: atom으로 나누기
  return (
    <div className={styles.wrapper}>
      <EditRecordName name={name} />
      <LineSvg />
      {/* @TODO API로 해당하는 name에 맞는 set 정보 불러오기 */}
      <EditRecordSets />
      <AddSetButton />
    </div>
  );
}

export default EditRecordsForm;
