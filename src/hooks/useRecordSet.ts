import { useState } from 'react';

function useRecordSet(initialRecordSet: {
  [key: string]: { id: number; set: number; kg: number; count: number }[];
}) {
  const [recordSet, setRecordSet] = useState(initialRecordSet);

  const updateRecordSet = (
    name: string,
    data: { id: number; set: number; kg: number; count: number }[],
  ) => {
    setRecordSet((prevRecordSet) => ({
      ...prevRecordSet,
      [name]: data,
    }));
  };

  return [recordSet, updateRecordSet] as const;
}

export default useRecordSet;
