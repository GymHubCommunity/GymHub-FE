import { instance } from '@/apis';
import { FieldValues } from 'react-hook-form';

export interface submitPostProps {
  content?: string;
  imageUrls?: string[];
  hashTags?: string[];
}

async function submitPost(param: submitPostProps) {
  const response = await instance.post('/posts', JSON.stringify(param));
  return response.data;
}

export { submitPost };
