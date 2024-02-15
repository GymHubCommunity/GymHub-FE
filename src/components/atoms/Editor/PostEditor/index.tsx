import styles from '@/components/atoms/Editor/PostEditor/PostEditor.module.scss';
import { useFormContext } from 'react-hook-form';

//TODO: 기능 작업 해야함

interface PostEditorProps {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function PostEditor({ name, handleChange }: PostEditorProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const placeHolder =
    '오늘은 어떤 얘기를 할까요?\n운동 루틴, 식단, 다이어트 등등...';
  return (
    <>
      <textarea
        id={name}
        className={styles.editor}
        placeholder={placeHolder}
        {...register(name, {
          required: {
            value: true,
            message: '글을 작성 해주세요.',
          },
        })}
        onChange={handleChange}
      ></textarea>
      {errors[name] && (
        <span className={styles.error}>This field is required</span>
      )}
    </>
  );
}

export default PostEditor;
