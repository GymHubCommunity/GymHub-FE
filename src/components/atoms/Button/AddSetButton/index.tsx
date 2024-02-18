import PlusIconSvg from '@/assets/icons/PlusIconSvg';
import styles from '@/components/atoms/Button/AddSetButton/AddSetButton.module.scss';

function AddSetButton() {
  return (
    <button type="button" className={styles.wrapper}>
      <PlusIconSvg />
      세트 추가
    </button>
  );
}

export default AddSetButton;
