import { instance } from '@/apis';
import { RecordProps } from '@/types/record';

async function getRecordSnapshots(size: number) {
  const response = await instance.get<RecordProps>(
    `/records/snapshots?size=${size}`,
  );
  return response;
}

async function postRecordSnapshots(recordId: number) {
  const response = await instance.post(`/records/${recordId}/snapshots`);
  return response;
}

async function deleteRecordSnapshots(snapshotId: number) {
  await instance.delete(`/records/snapshots/${snapshotId}`);
}

export { getRecordSnapshots, postRecordSnapshots, deleteRecordSnapshots };
