import { instance } from '@/apis';

export interface postProps {
  postId?: string;
  content?: string;
  imageUrls?: string[];
  hashtags?: string[];
  work?: 'add' | 'update';
}
export interface submitPostProps {
  content?: string;
  imageUrls?: string[];
  hashTags?: string[];
}

async function submitPost(param: submitPostProps) {
  const response = await instance.post('/posts', JSON.stringify(param));
  return response.data;
}

async function updatePost(id: string, param: submitPostProps) {
  const response = await instance.put(`/posts/${id}`, JSON.stringify(param));
  return response.status;
}

async function deletePost(id: number) {
  const response = await instance.delete(`/posts/${id}`);
  return response.data;
}

export { submitPost, updatePost, deletePost };
