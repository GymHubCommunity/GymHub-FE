import { instance } from '@/apis';

async function getRecordSnapshots() {
  const response = await instance.get(`/records/snapshots`);
  return response;
}

async function postRecordSnapshots(recordId: number) {
  const response = await instance.post(`/records/${recordId}/snapshots`);
  return response;
}

async function deleteRecordSnapshots(snapshotId: number) {
  await instance.post(`/records/snapshots/${snapshotId}`);
}

export { getRecordSnapshots, postRecordSnapshots, deleteRecordSnapshots };
