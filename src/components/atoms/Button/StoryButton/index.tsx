import styles from '@/components/atoms/Button/StoryButton/StoryButton.module.scss';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';
import Link from 'next/link';

interface StoryButtonProps {
  id: number;
  imgUrl: string;
  name: string;
}

function StoryButton({ id, imgUrl, name }: StoryButtonProps) {
  return (
    <Link href={`/members/${id}`} className={styles.wrapper}>
      <ProfileImg type="story" imgUrl={imgUrl} size={72} />
      <Text post="storyName">{name}</Text>
    </Link>
  );
}

export default StoryButton;
