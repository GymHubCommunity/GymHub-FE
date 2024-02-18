import ShareSvg from '@/assets/icons/ShareSvg';
import styles from '@/components/atoms/Button/ShareButton/ShareButton.module.scss';

function ShareButton() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>운동 친구 초대하기</p>
      <ShareSvg />
    </div>
  );
}

export default ShareButton;
