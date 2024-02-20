import PictureSvg from '@/assets/icons/PictureSvg';
import styles from '@/components/atoms/Button/PictureButton/PictureButton.module.scss';
import useImageUpload from '@/hooks/useImageUpload';
import { PictureButtonProps } from '@/types/Image';
import { useEffect } from 'react';

function PictureButton({ onImageChange }: PictureButtonProps) {
  const { file, setFile, handleSetPresignedURL } = useImageUpload();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (reader.readyState === 2) {
        onImageChange(e.target?.result as string);
      }
    };
    e.target.value = '';
    setFile(file);
  };

  useEffect(() => {
    handlePresignedUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handlePresignedUrl = async () => {
    if (!file) return;
    await handleSetPresignedURL(file);
  };

  return (
    <label htmlFor="fileInput" className={styles.wrapper}>
      <PictureSvg />
      <span className={styles.title}>사진</span>
      <input
        type="file"
        id="fileInput"
        className={styles.file}
        onChange={handleImageChange}
      ></input>
    </label>
  );
}

export default PictureButton;
