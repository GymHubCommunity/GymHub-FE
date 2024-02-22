import styles from '@/components/molecules/FollowList/FollowList.module.scss';

function FollowList({ profileUrl, name, onClick, content }) {
  return (
    <div className={styles.wrapper}>
      <img src={profileUrl} alt="프로필 이미지" className={styles.img} />
      <p className={styles.name}>{name}</p>
      <button type="button" onClick={onClick} className={styles.button}>
        {content}
      </button>
    </div>
  );
}

export default FollowList;
