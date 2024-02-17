import { atom, useAtom } from 'jotai';

const selectedDateAtom = atom<Date | null>(new Date());

function useSelectedDate() {
  const [selectedDate, setSelectedDate] = useAtom(selectedDateAtom);
  const updateDate = (date: Date | null) => {
    setSelectedDate(date);
  };
  return { selectedDate, updateDate };
}

export default useSelectedDate;
