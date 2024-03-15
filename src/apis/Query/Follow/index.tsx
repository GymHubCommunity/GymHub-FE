import { instance } from '@/apis';

import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import toast from 'react-hot-toast';

export interface memberIdProp {
  memberId: string | string[];
}

interface followIdProp {
  followId: number;
}

interface lastIdProp {
  lastId: number;
}

interface getFollowingsProps {
  hasNext: boolean;
  follows: {
    id: number;
    memberId: number; // PathVariable로 입력한 회원을 팔로우하고 있는 회원의 아이디(이정우의 id)
    nickname: string;
    profileUrl: string;
  }[];
}

export interface getPendingProps {
  hasNext: boolean;
  follows: {
    id: number;
    memberId: number;
    nickname: string;
    profileUrl: string;
  }[];
}

/*
 * 팔로워 목록 GET
 */
function useGetFollowers(memberId: number) {
  const getFollowers = async ({ lastId }: lastIdProp) => {
    const response = await instance.get(
      `/members/${memberId}/followers?lastId=${lastId}&size=11`,
    );
    return response.data;
  };

  const {
    data: followers,
    hasNextPage: nextFollowers,
    fetchNextPage: fetchNextFollowers,
  } = useInfiniteQuery({
    queryKey: ['followers'],
    queryFn: ({ pageParam: lastId }) => getFollowers({ lastId }),
    initialPageParam: -1,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.follows) || [],
      pageParams: data.pageParams,
    }),
    getNextPageParam: (lastPage) => {
      const lastId = lastPage.follows[lastPage.follows.length - 1]?.id;
      if (!lastPage.hasNext || !lastId) {
        return undefined;
      }
      return lastId;
    },
  });
  return { followers, nextFollowers, fetchNextFollowers };
}

/*
 *  팔로잉 목록 GET
 */
function useGetFollowings(memberId: number) {
  const getFollowings = async ({ lastId }: lastIdProp) => {
    const response = await instance.get<getFollowingsProps>(
      `/members/${memberId}/followings?lastId=${lastId}&size=11`,
    );
    return response.data;
  };

  const {
    data: followings,
    hasNextPage: nextFollowings,
    fetchNextPage: fetchNextFollowing,
  } = useInfiniteQuery({
    queryKey: ['followings'],
    queryFn: ({ pageParam: lastId }) => getFollowings({ lastId }),
    initialPageParam: -1,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.follows) || [],
      pageParams: data.pageParams,
    }),
    getNextPageParam: (lastPage) => {
      const lastId = lastPage.follows[lastPage.follows.length - 1]?.id;
      if (!lastPage.hasNext || !lastId) {
        return undefined;
      }
      return lastId;
    },
  });
  return { followings, nextFollowings, fetchNextFollowing };
}

/**
 * 대기 상태 팔로우 GET
 */

function useGetPending() {
  const getPending = async ({ lastId }: lastIdProp) => {
    const response = await instance.get<getPendingProps>(
      `/follows/pending?lastId=${lastId}&size=10`,
    );
    return response.data;
  };

  const {
    data: pending,
    hasNextPage: nextPending,
    fetchNextPage: fetchNextPending,
  } = useInfiniteQuery({
    queryKey: ['pending'],
    queryFn: ({ pageParam: lastId }) => getPending({ lastId }),
    initialPageParam: -1,
    select: (data) => ({
      pages: data?.pages.flatMap((page) => page.follows) || [],
      pageParams: data.pageParams,
    }),
    getNextPageParam: (lastPage) => {
      const lastId = lastPage.follows[lastPage.follows.length - 1]?.id;
      if (!lastPage.hasNext || !lastId) {
        return undefined;
      }
      return lastId;
    },
  });
  return { pending, nextPending, fetchNextPending };
}

/*
 * 팔로우 요청 보내기 POST
 */
function usePostFollow({ memberId }: memberIdProp) {
  const { mutate: postFollow } = useMutation({
    mutationFn: () => {
      return instance.post(`/members/${memberId}/follow`);
    },
    onSuccess: () => {
      return toast.success('팔로우 요청');
    },
    onError: () => {
      return toast.error('팔로우 요청을 실패했습니다.');
    },
  });

  return { postFollow };
}

/*
 * 팔로우 취소 POST
 */
function usePostUnfollow({ memberId }: memberIdProp) {
  const queryClient = useQueryClient();
  const { mutate: postUnfollow } = useMutation({
    mutationFn: () => {
      return instance.post(`/members/${memberId}/unfollow`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pending'] });
      return toast.success('팔로우 취소');
    },
    onError: () => {
      return toast.error('팔로우 취소를 실패했습니다.');
    },
  });

  return { postUnfollow };
}

/*
 * 팔로우 요청 수락 POST
 */
function useApproveFollow({ followId }: followIdProp) {
  const queryClient = useQueryClient();
  const { mutate: approveFollow } = useMutation({
    mutationFn: () => {
      return instance.post(`/follows/${followId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pending'] });
    },
    onError: () => {
      return toast.error('팔로우 수락을 실패했습니다.');
    },
  });

  return { approveFollow };
}

/*
 * 팔로우 요청 거절 / 팔로우 끊어내기 DELETE
 */
function useDeleteFollow({ followId }: followIdProp) {
  const queryClient = useQueryClient();
  const { mutate: deleteFollow } = useMutation({
    mutationFn: () => {
      return instance.delete(`/follows/${followId}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pending'] });
      queryClient.invalidateQueries({ queryKey: ['followers'] });
    },
    onError: () => {
      return toast.error('팔로우 삭제를 실패했습니다.');
    },
  });

  return { deleteFollow };
}

export {
  useApproveFollow,
  useDeleteFollow,
  useGetFollowers,
  useGetFollowings,
  useGetPending,
  usePostFollow,
  usePostUnfollow,
};
