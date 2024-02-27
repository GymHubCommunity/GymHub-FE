import { instance } from '@/apis';
import { WriterInfoProps } from '@/types/GetPost';

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
export interface searchPostProp {
  pageParam: number;
  keyword: string;
}

export interface searchResponseProps {
  hasNext: boolean;
  posts: {
    postId: number;
    writerInfo: WriterInfoProps;
    content: string;
    imageUrl: string | Array<string> | null;
    commentCount: number;
    registeredAt: string;
  }[];
  totalPostCount: number;
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

async function searchPost({ pageParam, keyword }: searchPostProp) {
  const response = await instance.get<searchResponseProps>(
    keyword === '전체'
      ? `/posts/search?page=${pageParam}&size=2`
      : `/posts/search?hashtag=${keyword}&page=${pageParam}&size=2`,
  );
  return response.data;
}

export { submitPost, updatePost, deletePost, searchPost };
