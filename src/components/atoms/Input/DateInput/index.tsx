import RegisterItem from '@/components/atoms/Form/RegisterItem';
import DateFormat from '@/utils/DateFormat';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput() {
  const { year, month, day } = DateFormat(new Date());
  const minDateTime = year + '-' + month + '-' + day;
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  return (
    <RegisterItem title="날짜 " required>
      <DatePicker
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        minDate={new Date(minDateTime)}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
    </RegisterItem>
  );
}

export default DateInput;
