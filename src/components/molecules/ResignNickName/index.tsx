import styles from '@/components/molecules/ResignNickName/ResignNickName.module.scss';

function ResignNickName() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>닉네임 입력하여 회원 탈퇴 진행</p>
      <input className={styles.input} placeholder="닉네임" />
    </div>
  );
}

export default ResignNickName;
