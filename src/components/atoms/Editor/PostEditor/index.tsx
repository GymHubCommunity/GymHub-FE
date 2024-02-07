import styles from '@/components/atoms/Editor/PostEditor/PostEditor.module.scss';

//TODO: 기능 작업 해야함
function PostEditor() {
  const placeHolder =
    '오늘은 어떤 얘기를 할까요?\n운동 루틴, 식단, 다이어트 등등...';
  return (
    <textarea className={styles.editor} placeholder={placeHolder}></textarea>
  );
}

export default PostEditor;
