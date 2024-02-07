import { ChangeEvent, KeyboardEvent, useState } from 'react';

interface LabelProps {
  id: number;
  value: string;
}

function useLabelInput() {
  const [id, setId] = useState(0);
  const [value, setValue] = useState('');
  const [labels, setLabels] = useState<LabelProps[]>([]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter' || e.nativeEvent.isComposing || value === '') return;

    if (labels.map((val) => val.value === value).includes(true))
      return setValue('');

    const newLabel = { id, value };

    setId((prev) => prev + 1);
    setLabels((prev) => {
      return [...prev, newLabel];
    });
    setValue('');
  };

  const deleteLabel = (selectId: number) => {
    setLabels((prev) =>
      prev.filter((prevFilter) => prevFilter.id !== selectId),
    );
  };

  return { value, labels, handleChangeInput, handleEnter, deleteLabel };
}

export default useLabelInput;
