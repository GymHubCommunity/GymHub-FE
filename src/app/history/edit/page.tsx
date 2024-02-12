'use client';

import EditHistoryForm from '@/components/molecules/EditHistoryForm';
import EditHistoryHeader from '@/components/molecules/EditHistoryHeader';

function EditPage() {
  // @TODO API로 EditHistoryForm 불러오기

  return (
    <>
      <EditHistoryHeader />
      <EditHistoryForm name="바벨 스쿼트" />
    </>
  );
}

export default EditPage;
