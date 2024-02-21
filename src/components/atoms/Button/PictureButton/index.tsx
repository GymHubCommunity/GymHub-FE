import PictureSvg from '@/assets/icons/PictureSvg';
import styles from '@/components/atoms/Button/PictureButton/PictureButton.module.scss';
import { ImgUploadButtonProps } from '@/types/image';
import { ChangeEvent, useEffect } from 'react';
import useImageUpload from '@/hooks/useImageUpload';
import { useEffect } from 'react';

function PictureButton({ onImageChange }: ImgUploadButtonProps) {
  const { file, setFile, handleSetPresignedURL } = useImageUpload();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    if (!file.name) return;
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
      />
    </label>
  );
}

export default PictureButton;
