import ShareButton from '@/components/atoms/Button/ShareButton';
import styles from '@/components/molecules/BlankArticle/BlankArticle.module.scss';
import { defaultFadeInUpVariants } from '@/constants/motion';
import { m } from 'framer-motion';

function BlankArticle() {
  return (
    <m.div
      variants={defaultFadeInUpVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.wrapper}
    >
      <p className={styles.text}>게시글이 없어요!</p>
      <ShareButton />
    </m.div>
  );
}

export default BlankArticle;
