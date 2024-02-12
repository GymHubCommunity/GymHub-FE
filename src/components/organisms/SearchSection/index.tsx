import Text from '@/components/atoms/Text';
import Comment from '@/components/molecules/Comment';
import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Reaction from '@/components/molecules/Reaction';
import SearchArticle from '@/components/molecules/SearchArticle';
import styles from '@/components/organisms/SearchSection/SearchSection.module.scss';
import { comment, post, postProfile } from '@/constants/MockData';
import { filterValueAtom } from '@/hooks/useSearchFilter';
import { useAtomValue } from 'jotai';

function SearchSection() {
  const filterValue = useAtomValue(filterValueAtom);
  return (
    <div className={styles.wrapper}>
      <SearchArticle />
      {/* TODO: 검색된 결과에 따라 나오는 값 변환 해줘야함 */}
      {filterValue.length !== 0 ? (
        <>
          <PostProfile postProfile={postProfile} />
          <Post post={post} />
          <Reaction />
          <Comment type="allView" comment={comment} />
        </>
      ) : (
        <div className={styles.noPost}>
          <Text post="noPost">게시글이 없습니다.</Text>
        </div>
      )}
    </div>
  );
}

export default SearchSection;
