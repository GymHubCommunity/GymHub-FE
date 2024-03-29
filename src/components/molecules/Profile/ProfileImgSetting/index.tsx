import CameraSvg from '@/assets/icons/CameraSvg';
import ProfileImgSvg from '@/assets/icons/ProfileImgSvg';
import styles from '@/components/molecules/Profile/ProfileImgSetting/ProfileImgSetting.module.scss';
import useImageUpload from '@/hooks/useImageUpload';
import { ImgUploadButtonProps } from '@/types/image';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

function ProfileImgSetting({ userImg, prop }: ImgUploadButtonProps) {
  const { file, setFile, handleSetPresignedURL } = useImageUpload();
  const [image, setImage] = useState('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e: ProgressEvent<FileReader>) => {
      if (reader.readyState === 2) {
        setImage(e.target?.result as string);
      }
    };
    e.target.value = '';
    setFile(file);
  };

  useEffect(() => {
    setImage(userImg as string);
  }, []);

  useEffect(() => {
    if (!file) return;
    if (!file.name) return;
    handlePresignedUrl();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [file]);

  const handlePresignedUrl = async () => {
    if (!file) return;
    await handleSetPresignedURL(file);
  };

  return (
    <label htmlFor="profileImgInput">
      <div className={styles.wrapper}>
        <input
          id="profileImgInput"
          type="file"
          className={styles.cameraInput}
          onChange={handleImageChange}
          {...prop}
        />
        <div className={styles.profileImg}>
          {image ? (
            <Image src={image} alt="이미지 미리보기" width={128} height={128} />
          ) : (
            <ProfileImgSvg />
          )}
        </div>
        <div className={styles.cameraImg}>
          <CameraSvg />
        </div>
      </div>
    </label>
  );
}

export default ProfileImgSetting;
