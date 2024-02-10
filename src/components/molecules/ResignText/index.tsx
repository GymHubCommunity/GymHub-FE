import styles from '@/components/molecules/ResignText/ResignText.module.scss';

function ResignText() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.mainText}>
        같이 운동할 수 없게되어 정말 아쉬워요 :(
      </p>
      <p className={styles.subText}>
        회원 탈퇴를 하실 경우 회원님의 데이터 및 프로필은 모두 삭제되며 복구할
        수 없습니다.
      </p>
    </div>
  );
}

export default ResignText;
