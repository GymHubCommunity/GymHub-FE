import { instance, instanceAWS } from '@/apis';
import { S3_BUCKET_NAME } from '@/constants/common';
interface getPresignedURLProps {
  formData?: FormData;
  fileData?: File;
  presignedURL?: string;
  contentType?: string;
}

async function getPresignedURL({ formData }: getPresignedURLProps) {
  const response = await instance.post('/images/presigned_url', formData);
  return response.data;
}

async function uploadImageToS3({
  fileData,
  presignedURL,
  contentType,
}: getPresignedURLProps) {
  const config = {
    headers: {
      'Content-Type': contentType,
    },
  };
  const response = await instanceAWS.put(
    `${S3_BUCKET_NAME}${presignedURL}`,
    fileData,
    config,
  );

  return response.data;
}

export { getPresignedURL, uploadImageToS3 };
