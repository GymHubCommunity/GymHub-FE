import styles from '@/components/atoms/Button/StoryButton/StoryButton.module.scss';
import ProfileImg from '@/components/atoms/ProfileImg';
import Text from '@/components/atoms/Text';

interface StoryButtonProps {
  imgUrl: string;
  name: string;
}

function StoryButton({ imgUrl, name }: StoryButtonProps) {
  return (
    <button className={styles.wrapper} onClick={() => console.log(name)}>
      <ProfileImg type="story" imgUrl={imgUrl} size={72} />
      <Text post="storyName">{name}</Text>
    </button>
  );
}

export default StoryButton;
