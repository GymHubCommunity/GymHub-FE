import { getPresignedURL, uploadImageToS3 } from '@/apis/image';
import { AWS_S3_URL, S3_BUCKET_NAME } from '@/constants/common';
import PresignedUrls from '@/utils/PresignedUrls';
import { atom, useAtom } from 'jotai';
import toast from 'react-hot-toast';

const fileAtom = atom<File | null>({} as File);
const presignedUrlAtom = atom('');

const useImageUpload = () => {
  const [file, setFile] = useAtom(fileAtom);
  const [presignedUrl, setPresignedUrl] = useAtom(presignedUrlAtom);

  const handleSetPresignedURL = async (file: File) => {
    if (!file) return;
    const formData = new FormData();
    formData.append('contentLength', file.size + '');
    formData.append('extension', file.type?.replace('image/', ''));
    try {
      const response = await getPresignedURL({ formData });
      if (response) {
        setPresignedUrl(
          PresignedUrls({ presignedUrl: response.presignedUrl, type: 'S3' }),
        );
        return true;
      }
    } catch (error) {
      toast.error('이미지 파일 저장 중 오류 발생 하였습니다.');
      return false;
    }
  };

  const handleUploadImageToS3 = async () => {
    if (!file || !presignedUrl) return;
    try {
      await uploadImageToS3({
        fileData: file,
        presignedURL: presignedUrl,
        contentType: file.type,
      });

      const imageUrl =
        AWS_S3_URL +
        PresignedUrls({
          presignedUrl: S3_BUCKET_NAME + presignedUrl,
          type: 'DB',
        });

      return imageUrl;
    } catch (error) {
      toast.error('이미지 파일 저장에 실패하였습니다.');
    }
  };

  return {
    file,
    setFile,
    handleSetPresignedURL,
    handleUploadImageToS3,
  };
};

export default useImageUpload;
