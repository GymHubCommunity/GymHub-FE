import Text from '@/components/atoms/Text';
import Comment from '@/components/molecules/Comment';
import Post from '@/components/molecules/Post';
import PostProfile from '@/components/molecules/PostProfile';
import Reaction from '@/components/molecules/Reaction';
import SearchArticle from '@/components/molecules/SearchArticle';
import Tabs from '@/components/molecules/Tabs';
import styles from '@/components/organisms/AllTabsSection/AllTabsSection.module.scss';
import { comment, post, postProfile } from '@/constants/MockData';
import { filterValueAtom } from '@/hooks/useSearchFilter';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';

function AllTabsSection() {
  const [filterValue, setFilterValue] = useAtom(filterValueAtom);
  const [isSelected, setIsSelected] = useState('전체');

  const handleClicked = (selectTab: string) => {
    setIsSelected(selectTab);
  };

  useEffect(() => {
    setFilterValue([]);
  }, []);

  // TODO: 눌린 버튼의 글씨가 나옵니다.
  console.log(isSelected);

  return (
    <div className={styles.wrapper}>
      <SearchArticle />
      {/* TODO: 검색된 결과에 따라 나오는 값 변환 해줘야함 */}
      {filterValue.length !== 0 ? (
        <>
          <PostProfile type={'default'} postProfile={postProfile} />
          <Post post={post} />
          <Reaction />
          <Comment comment={comment} />
        </>
      ) : (
        <>
          <Tabs clicked={handleClicked} />
          <div className={styles.noPost}>
            <Text post="noPost">게시글이 없습니다.</Text>
          </div>
        </>
      )}
    </div>
  );
}

export default AllTabsSection;
