import { instance } from '@/apis';
import { PostRecordProp, RecordProps } from '@/types/record';

async function postRecords(tracks: PostRecordProp) {
  const response = await instance.post<PostRecordProp>(
    '/records',
    JSON.stringify(tracks),
  );
  return response.data;
}

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

export {
  deleteRecordSnapshots,
  getRecordSnapshots,
  postRecordSnapshots,
  postRecords,
};
