import PictureSvg from '@/assets/icons/PictureSvg';
import styles from '@/components/atoms/Button/PictureButton/PictureButton.module.scss';
import { PictureButtonProps } from '@/types/image';
import { instance, instanceFiles } from '@/apis';
import { useEffect, useState } from 'react';

function PictureButton({ onImageChange }: PictureButtonProps) {
  const [file, setFile] = useState<File | null>(null);
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
    handleFileUpload();
  }, [file]);

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('contentLength', file.size + '');
    formData.append('extension', file.type.replace('image/', ''));

    try {
      const response = await instance.post('/images/presigned_url', formData);
      console.log('response  : ', response);
    } catch (e) {
      console.error(e);
    }
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
