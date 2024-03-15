import DateFormat from '@/utils/DateFormat';
import { useEffect, useState } from 'react';

function useDateHeaderControls(selectedDate: Date | null) {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  useEffect(() => {
    if (selectedDate) {
      const { year, month, day } = DateFormat(selectedDate);
      setYear(year);
      setMonth(month);
      setDay(day);
    }
  }, [selectedDate]);

  const decreaseHeader = () => {
    if (parseInt(month) === 1) {
      setYear(String(parseInt(year) - 1));
      setMonth('12');
    } else {
      setMonth(String(parseInt(month) - 1).padStart(2, '0'));
    }
  };

  const increaseHeader = () => {
    if (parseInt(month) === 12) {
      setYear(String(parseInt(year) + 1));
      setMonth('1');
    } else {
      setMonth(String(parseInt(month) + 1).padStart(2, '0'));
    }
  };

  return {
    year,
    month,
    day,
    setYear,
    setMonth,
    setDay,
    decreaseHeader,
    increaseHeader,
  };
}

export default useDateHeaderControls;
