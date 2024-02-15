import SearchButton from '@/components/atoms/Button/SearchButton';
import SearchInput from '@/components/atoms/Input/SearchInput';

function Search() {
  return (
    <div>
      <SearchInput />
      <SearchButton page="search" />
    </div>
  );
}

export default Search;
