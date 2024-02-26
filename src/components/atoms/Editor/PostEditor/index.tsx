import styles from '@/components/atoms/Editor/PostEditor/PostEditor.module.scss';
import { POST_PLACEHOLDER } from '@/constants/Post';
import { atom, useAtom } from 'jotai';
import { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';

export const hashTagsAtom = atom<string[]>([]);

interface PostEditorProps {
  name: string;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function PostEditor({ name, handleChange }: PostEditorProps) {
  const { register } = useFormContext();
  const [hashTags, setHashTags] = useAtom(hashTagsAtom);

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e);
    const value = e.target.value;
    const result = findHashTags(value);
    setHashTags(result);
  };

  const findHashTags = (str: string) => {
    const hashTagsRegex = /#([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9_]+)(?=[\s.,:;]|$)/g;
    const filterHashTags = str.match(hashTagsRegex);
    return filterHashTags || [];
  };

  return (
    <>
      <textarea
        id={name}
        className={styles.editor}
        placeholder={POST_PLACEHOLDER}
        {...register(name, {
          required: true,
        })}
        onChange={handleTextAreaChange}
        maxLength={2000}
      />
      {hashTags && (
        <div className={styles.wrapper}>
          {hashTags.map((tag, index) => (
            <span key={index} className={styles.hashtag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </>
  );
}

export default PostEditor;
