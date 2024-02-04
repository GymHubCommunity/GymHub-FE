import ToggleMenu from '@/components/atoms/Button/ToggleMenu';
import Content from '@/components/atoms/Content';
import Name from '@/components/atoms/Name';
import ProfileImg from '@/components/atoms/ProfileImg';
import styles from '@/components/molecules/PostProfile/PostProfile.module.scss';
import { StaticImageData } from 'next/image';

interface PostProfileProps {
  data: {
    imgUrl: StaticImageData;
    name: string;
    workOutTime: string;
  };
}

function PostProfile({ data }: PostProfileProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inWrapper}>
        <ProfileImg imgUrl={data.imgUrl} size={57} />
        <div className={styles.profile}>
          <Name name={data.name} size="lg" />
          <Content type="workOut" workOutTime={data.workOutTime} />
        </div>
      </div>
      <ToggleMenu type="post" />
    </div>
  );
}

export default PostProfile;
