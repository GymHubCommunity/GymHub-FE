import styles from '@/components/molecules/Profile/ProfileImgSetting/ProfileImgSetting.module.scss';
import CameraSvg from '@/assets/icons/CameraSvg';
import ProfileImgSvg from '@/assets/icons/ProfileImgSvg';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

function ProfileImgSetting(props: any) {
  const [previewImage, setPreviewImage] = useState<string>('');

  const handleChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files?.[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setPreviewImage(e.target.result);
        }
      };
    }
  };

  return (
    <label htmlFor="profileImage">
      <div className={styles.wrapper}>
        <input
          id="profileImage"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          className={styles.cameraInput}
          onChange={handleChangeFile}
          ref={props.inputRef}
        />
        <div className={styles.profileImg}>
          {previewImage ? (
            <Image
              src={previewImage}
              alt="이미지 미리보기"
              width={128}
              height={128}
            />
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
