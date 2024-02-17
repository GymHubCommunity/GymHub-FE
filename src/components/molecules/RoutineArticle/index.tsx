import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Reaction from '@/components/molecules/Reaction';
import { postProfile, postRoutine } from '@/constants/MockData';

function RoutineArticle() {
  return (
    <>
      <PostProfile type="exercised" postProfile={postProfile} />
      <Post post={postRoutine} />
      <ExerciseRoutine />
      <Reaction />
    </>
  );
}

export default RoutineArticle;
