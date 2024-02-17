'use client';

import EditRecordsHeader, {
  exerciseAtom,
} from '@/components/molecules/EditRecord/EditRecordsHeader';
import { useAtomValue } from 'jotai';

function EditPage() {
  // @TODO API로 EditHistoryForm 불러오기
  const exercise = useAtomValue(exerciseAtom);
  return (
    <>
      <EditRecordsHeader />
      {exercise}
    </>
  );
}

export default EditPage;
