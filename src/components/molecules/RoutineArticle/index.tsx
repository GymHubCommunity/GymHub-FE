import ExerciseRoutine from '@/components/molecules/ExerciseRoutine';
import Reaction from '@/components/molecules/Reaction';

function RoutineArticle() {
  // TODO: 수정필요
  return (
    <>
      {/* <PostProfile type="exercised" /> */}
      {/* <Post post={postRoutine} /> */}
      <ExerciseRoutine />
      <Reaction registeredAt={undefined} />
    </>
  );
}

export default RoutineArticle;
