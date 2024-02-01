'use client';
import RegisterItem from '@/components/Form/RegisterItem';
import RegisterFormProvider from '@/components/FormProvider/RegisterFormProvider';
import { SchemaProps } from '@/types/user';
import DateFormat from '@/utils/DateFormat';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useFormContext } from 'react-hook-form';

function DateInput() {
  const { year, month, day } = DateFormat(new Date());
  const minDateTime = year + '-' + month + '-' + day;
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const {
    register,
    formState: { errors },
  } = useFormContext<SchemaProps>();

  return (
    <RegisterFormProvider>
      <RegisterItem title="날짜 " required>
        <DatePicker
          dateFormat="yyyy.MM.dd"
          shouldCloseOnSelect
          minDate={new Date(minDateTime)}
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
      </RegisterItem>
    </RegisterFormProvider>
  );
}

export default DateInput;
