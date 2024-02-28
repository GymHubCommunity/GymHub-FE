import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import Input from '@/components/atoms/Input';
import Text from '@/components/atoms/Text';
import Comment from '@/components/molecules/Comment';
import PostArticle from '@/components/molecules/PostArticle';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import Modal from '@/components/organisms/Modal';
import styles from '@/components/organisms/PostSection/PostSection.module.scss';
import useModalInfo from '@/hooks/useModalInfo';
import usePostSection from '@/hooks/usePostSection';
import useToggleMenu from '@/hooks/useToggleMenu';
import { GetPostDetailProps } from '@/types/GetPost';

interface PostSectionProp {
  data: GetPostDetailProps;
}

function PostSection({ data }: PostSectionProp) {
  const { isShow, closeModal } = useModalInfo();
  const { isOpen } = useToggleMenu();

  const postId = data.postId;
  const { comment, commentData, ref } = usePostSection({ postId });

  return (
    <div className={styles.wrapper}>
      {isShow && (
        <Modal type={'commentDel'} isShow={isShow} closeModal={closeModal} />
      )}
      <BackButtonHeader pageName={'게시글 상세 보기'} />
      <div className={styles.inWrapper}>
        <div className={styles.postWrapper}>
          <PostArticle
            postId={data.postId}
            userInfo={data.writerInfo}
            content={data.content}
            imageUrl={data.imageUrls as Array<string>}
            registeredAt={data.registeredAt}
            commentCount={data.commentCount}
          />
          <Text post="commentCount">댓글 {commentData?.commentCount}개</Text>
          <div className={styles.commentWrapper}>
            {comment?.pages.map((val) => (
              <Comment
                key={val.commentId}
                id={val.commentId}
                imgUrl={val.writerInfo.profileUrl}
                userName={val.writerInfo.nickname}
                date={val.registeredAt}
                comment={val.content}
              />
            ))}
            <div ref={ref} />
          </div>
          <Input type="comment" />
        </div>
        {/* TODO: 운동루틴 API 개발되면 수정 */}
        {/* <div className={styles.routineWrapper}>
          <RoutineArticle />
        </div> */}
      </div>
      <div className={styles.modalWrapper}>
        {isOpen && <ToggleItems type="post" />}
      </div>
    </div>
  );
}

export default PostSection;
