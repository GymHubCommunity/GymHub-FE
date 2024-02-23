interface WriterInfoProps {
  writerId: number;
  nickname: string;
  email: string;
  profileUrl: string;
}

interface PostProps {
  posts: {
    postId: number;
    writerInfo: WriterInfoProps;
    content: string;
    imageUrl?: string;
    registeredAt: string;
  }[];
  hasNext: boolean;
}

interface GetPostItemsProps {
  pages: PostProps[];
  pageParams: number[];
}

interface GetPostDetailProps {
  postId: number;
  writerInfo: {
    writerId: number;
    nickname: string;
    email: string;
    profileUrl: string;
  };
  content: string;
  imageUrls?: [string | null];
  hashtags?: [string | null];
  commentCount?: number;
  registeredAt: string;
}

export type {
  GetPostDetailProps,
  GetPostItemsProps,
  PostProps,
  WriterInfoProps,
};
