import ShareSvg from '@/assets/icons/ShareSvg';
import styles from '@/components/atoms/Button/ShareButton/ShareButton.module.scss';
import useShareToast from '@/hooks/useShareToast';

function ShareButton() {
  const { openToast } = useShareToast();

  return (
    <button className={styles.wrapper} onClick={openToast} role="button">
      <p className={styles.text}>운동 친구 초대하기</p>
      <ShareSvg />
    </button>
  );
}

export default ShareButton;
