import TabButton from '@/components/atoms/Button/TabButton';
import styles from '@/components/molecules/Tabs/Tabs.module.scss';

interface TabsProps {
  clicked: (selectTab: string) => void;
}

function Tabs({ clicked }: TabsProps) {
  return (
    <div className={styles.wrapper}>
      <TabButton clicked={clicked}>전체</TabButton>
      <TabButton clicked={clicked}>운동 루틴</TabButton>
      <TabButton clicked={clicked}>커밋</TabButton>
      <TabButton clicked={clicked}>오운완</TabButton>
    </div>
  );
}

export default Tabs;
