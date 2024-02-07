import Text from '@/components/atoms/Text';

interface CommentCountProps {
  type: 'default' | 'allView';
  count: string;
}

function CommentCount({ type, count }: CommentCountProps) {
  return (
    <>
      {type === 'allView' ? (
        <button type="button" onClick={() => {}}>
          <Text post="commentCount">댓글 {count}개 전체보기</Text>
        </button>
      ) : (
        <Text post="commentCount">댓글 {count}개</Text>
      )}
    </>
  );
}

export default CommentCount;
