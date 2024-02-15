'use client';

import EditRecordsForm from '@/components/molecules/EditRecordsForm';
import EditRecordsHeader from '@/components/molecules/EditRecordsHeader';

function EditPage() {
  // @TODO API로 EditHistoryForm 불러오기

  return (
    <>
      <EditRecordsHeader />
      <EditRecordsForm name="바벨 스쿼트" />
    </>
  );
}

export default EditPage;
