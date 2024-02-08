import Comment from '@/components/molecules/Comment';
import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Profile from '@/components/molecules/Profile';
import Reaction from '@/components/molecules/Reaction';
import styles from '@/components/organisms/MyProfile/MyProfile.module.scss';
import { comment, post, postProfile, profile } from '@/constants/MockData';
import BackButtonHeader from '../Header/BackButtonHeader';

function MyProfile() {
  return (
    <div className={styles.wrapper}>
      <BackButtonHeader pageName={profile.name} />
      <Profile profile={profile} />
      <PostProfile postProfile={postProfile} />
      <Post post={post} />
      <Reaction />
      <Comment type="default" comment={comment} />
    </div>
  );
}

export default MyProfile;
