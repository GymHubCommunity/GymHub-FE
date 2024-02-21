import { instance } from '@/apis';

async function postPresignedUrl(formData: FormData) {
  const response = await instance.post(`/images/presigned_url`, formData);
  return response;
}

export { postPresignedUrl };
