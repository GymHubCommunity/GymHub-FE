import useSearchPost from '@/apis/Query/Post/useSearchPost';
import Text from '@/components/atoms/Text';
import PostArticle from '@/components/molecules/PostArticle';
import SearchArticle, {
  totalCountAtom,
} from '@/components/molecules/SearchArticle';
import styles from '@/components/organisms/SearchSection/SearchSection.module.scss';
import { keywordValueAtom } from '@/hooks/useSearchFilter';
import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function SearchSection() {
  const keyword = useAtomValue(keywordValueAtom);
  const { data, fetchNextPage, hasNextPage } = useSearchPost(keyword);
  const { ref, inView } = useInView();
  const setTotalCount = useSetAtom(totalCountAtom);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
    if (data) {
      setTotalCount(data.totalPostCount);
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <div className={styles.wrapper}>
      <SearchArticle />
      {data?.pages.length ? (
        <>
          <div className={styles.feedWrapper}>
            {data?.pages.map((val) => (
              <div key={val.postId} className={styles.inWrapper}>
                <PostArticle
                  postId={val.postId}
                  userInfo={val.writerInfo}
                  content={val.content}
                  imageUrl={val.imageUrl as string}
                  registeredAt={val.registeredAt}
                  commentCount={val.commentCount}
                />
              </div>
            ))}
            <div ref={ref} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.npPostWrapper}>
            <div className={styles.noPost}>
              <Text post="noPost">게시글이 없습니다.</Text>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchSection;
