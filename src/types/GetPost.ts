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
  pages: PostProps[] | GetPostDetailProps[];
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
  imageUrl?: [string | null | undefined];
  hashtags?: [string | null];
  commentCount: number;
  registeredAt: string;
}

interface GetPost {
  posts: GetPostDetailProps[];
  hasNext: boolean;
}

export type {
  GetPost,
  GetPostDetailProps,
  GetPostItemsProps,
  PostProps,
  WriterInfoProps,
};
