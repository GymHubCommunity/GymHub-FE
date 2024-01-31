'use client';
import ConvertDate from '@/utils/ConvertDate';
import { ChangeEvent, useState } from 'react';

function DateInput() {
  const [startsAt, setStartsAt] = useState('');
  const minDateTime = ConvertDate(new Date()).slice(0, 16);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStartsAt(ConvertDate(new Date(event.target.value)));
  };

  return (
    <input
      placeholder="선택"
      type="datetime-local"
      value={startsAt.slice(0, 16)}
      min={minDateTime}
      onChange={handleChange}
    />
  );
}

export default DateInput;
