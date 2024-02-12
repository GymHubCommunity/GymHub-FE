import PictureSvg from '@/assets/icons/PictureSvg';
import styles from '@/components/atoms/Button/PictureButton/PictureButton.module.scss';

interface PictureButtonProps {
  onClick: () => void;
}

function PictureButton({ onClick }: PictureButtonProps) {
  return (
    <button onClick={onClick} className={styles.wrapper}>
      <PictureSvg />
      <span className={styles.title}>사진</span>
    </button>
  );
}

export default PictureButton;
