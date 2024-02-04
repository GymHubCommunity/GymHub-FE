import Content from '@/components/atoms/Content';
import Name from '@/components/atoms/Name';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/Comment/Comment.module.scss';
import { StaticImageData } from 'next/image';

interface CommentProps {
  data: {
    imgUrl: StaticImageData;
    userName: string;
    comment: string;
  };
}

function Comment({ data }: CommentProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <ProfileImg imgUrl={data.imgUrl} size={38} />
        <div className={styles.user}>
          <Name name={data.userName} size="md" />
          <Content type="default" content={data.comment} />
        </div>
      </div>
      <div>좋아요</div>
    </div>
  );
}

export default Comment;
