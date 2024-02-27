import Image from 'next/image';
import loadingGif from '@/public/gif/loading.gif';
import styles from '@/components/atoms/Loading/Loading.module.scss';

function Loading() {
  return (
    <div className={styles.wrapper}>
      <Image src={loadingGif} alt="로딩중" width={350} height={350} />
    </div>
  );
}

export default Loading;
