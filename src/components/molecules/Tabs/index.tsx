import TabButton from '@/components/atoms/Button/TabButton';
import styles from '@/components/molecules/Tabs/Tabs.module.scss';
import { keywordValueAtom } from '@/hooks/useSearchFilter';
import { useSetAtom } from 'jotai';

function Tabs() {
  const setKeyword = useSetAtom(keywordValueAtom);
  const handleClick = (selectTab: string) => {
    setKeyword(selectTab);
  };
  return (
    <div className={styles.wrapper}>
      <TabButton clicked={handleClick}>전체</TabButton>
      <TabButton clicked={handleClick}>운동 루틴</TabButton>
      <TabButton clicked={handleClick}>커밋</TabButton>
      <TabButton clicked={handleClick}>오운완</TabButton>
    </div>
  );
}

export default Tabs;
