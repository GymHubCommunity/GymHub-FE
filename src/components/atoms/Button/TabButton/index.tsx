import styles from '@/components/atoms/Button/TabButton/TabButton.module.scss';
import { ReactNode, useState } from 'react';

interface TabButtonProp {
  clicked: (selectTab: string) => void;
  children: ReactNode;
}

function TabButton({ clicked, children }: TabButtonProp) {
  const [, setIsSelected] = useState(false);

  const handleButtonClick = () => {
    setIsSelected(true);
    clicked(children as string);
  };

  return (
    <button onMouseDown={handleButtonClick} className={styles.wrapper}>
      {children}
    </button>
  );
}

export default TabButton;
