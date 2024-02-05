import SearchArticle from '@/components/molecules/SearchArticle';
import styles from '@/components/organisms/SearchSection/SearchSection.module.scss';

function SearchSection() {
  return (
    <div className={styles.wrapper}>
      <SearchArticle />
      {/* <PostProfile /> */}
      {/* <Post /> */}
      {/* <Reaction /> */}
      {/* <Comment /> */}
    </div>
  );
}

export default SearchSection;
