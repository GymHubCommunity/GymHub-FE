import PlusIconSvg from '@/assets/icons/PlusIconSvg';
import styles from '@/components/atoms/Button/AddSetButton/AddSetButton.module.scss';

interface AddSetButtonProp {
  onClick: () => void;
}

function AddSetButton({ onClick }: AddSetButtonProp) {
  return (
    <button type="button" className={styles.wrapper} onClick={onClick}>
      <PlusIconSvg />
      세트 추가
    </button>
  );
}

export default AddSetButton;
