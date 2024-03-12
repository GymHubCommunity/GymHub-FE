'use client';

import useDeleteComment from '@/apis/Query/Comment/useDeleteComment';
import ModalArticle from '@/components/molecules/ModalArticle';
import ModalToggle from '@/components/molecules/ModalToggle';
import styles from '@/components/organisms/Modal/Modal.module.scss';
import { CommentDel, RecordsDel } from '@/constants/ModalToggle';
import { commentIdAtom } from '@/hooks/atoms';
import useGetPostId from '@/hooks/useGetPostId';
import useToggleItems from '@/hooks/useToggleItems';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

interface ModalProps {
  type: any;
  isShow: boolean;
  closeModal: () => void;
}

function Modal({ type, isShow, closeModal }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { handleOnClick } = useToggleItems(type);

  // 댓글 삭제 로직
  const { postId } = useGetPostId();
  const commentId = useAtomValue(commentIdAtom);
  const { deleteComment } = useDeleteComment({ postId, commentId });

  const handleDeleteComment = () => {
    deleteComment();
    closeModal();
  };

  useEffect(() => {
    const handleCloseModal = (e: MouseEvent) => {
      if (isShow && modalRef.current?.contains(e.target as Node)) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleCloseModal);

    return () => {
      document.removeEventListener('mousedown', handleCloseModal);
    };
  }, [isShow]);

  return (
    <>
      {isShow && <div ref={modalRef} className={styles.blur} />}
      {type === 'postReport' && (
        <ModalArticle
          first={'게시글 신고하기'}
          second={''}
          firstEvent={() => {}}
          secondEvent={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'snapShotBpx' && (
        <ModalArticle
          first={'저장된 운동함에서 삭제하기'}
          second={''}
          firstEvent={() => handleOnClick('snapShotBpx')}
          secondEvent={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'imgUpdate' && (
        <ModalArticle
          first={'사진 변경하기'}
          second={'기본 이미지로 변경하기'}
          firstEvent={() => {}}
          secondEvent={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'records' && (
        <ModalArticle
          first={'운동 추가하기'}
          second={'저장된 운동 가져오기'}
          firstEvent={() => router.push('/records/add')}
          secondEvent={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'recordsDel' && (
        <ModalToggle
          title={RecordsDel.title}
          info={RecordsDel.info}
          buttonTextL={RecordsDel.buttonTextL}
          buttonTextR={RecordsDel.buttonTextR}
          actionButton={() => {}}
          closeModal={closeModal}
        />
      )}
      {type === 'commentDel' && (
        <ModalToggle
          title={CommentDel.title}
          info={CommentDel.info}
          buttonTextL={CommentDel.buttonTextL}
          buttonTextR={CommentDel.buttonTextR}
          actionButton={handleDeleteComment}
          closeModal={closeModal}
        />
      )}
    </>
  );
}

export default Modal;
