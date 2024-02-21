import ShareButton from '@/components/atoms/Button/ShareButton';
import styles from '@/components/molecules/BlankArticle/BlankArticle.module.scss';

function BlankArticle() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>게시글이 없어요!</p>
      <ShareButton />
    </div>
  );
}

export default BlankArticle;
