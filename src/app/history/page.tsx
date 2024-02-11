'use client';

import DateInput from '@/components/atoms/Input/DateInput';
import DailyHistory from '@/components/molecules/DailyHistory';
import useToggleMenu from '@/hooks/useToggleMenu';
import styles from '@/app/history/HIstoryPage.module.scss';

function HistoryPage() {
  const { isOpen } = useToggleMenu();
  return (
    <div>
      {isOpen && <div className={styles.blur}></div>}
      <DateInput />
      <DailyHistory />
    </div>
  );
}

export default HistoryPage;
