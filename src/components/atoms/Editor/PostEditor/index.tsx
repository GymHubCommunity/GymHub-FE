import styles from '@/components/atoms/Editor/PostEditor/PostEditor.module.scss';
import { POST_PLACEHOLDER } from '@/constants/Post';
import { useFormContext } from 'react-hook-form';

//TODO: 기능 작업 해야함

interface PostEditorProps {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function PostEditor({ name, handleChange }: PostEditorProps) {
  const { register } = useFormContext();
  return (
    <>
      <textarea
        id={name}
        className={styles.editor}
        placeholder={POST_PLACEHOLDER}
        {...register(name, {
          required: true,
        })}
        onChange={handleChange}
      ></textarea>
    </>
  );
}

export default PostEditor;
