import styles from '@/components/atoms/Editor/PostEditor/PostEditor.module.scss';

//TODO: 기능 작업 해야함
function PostEditor() {
  return (
    <textarea
      className={styles.editor}
      placeholder="오늘은 어떤 이야기를 할까요?"
    ></textarea>
  );
}

export default PostEditor;
