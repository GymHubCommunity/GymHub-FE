// 운동기록 추가하기 POST
interface PostRecordProp {
  tracks: PostRecordsProps[];
}

interface PostRecordsProps {
  machineName: string;
  sets: PostRecordsSetsProps[];
}

interface PostRecordsSetsProps {
  weight: number;
  repeatCnt: number;
}

interface RecordProps {
  snapshots: RecordItemProps[];
  hasNext: boolean;
}

interface RecordItemProps {
  recordId: number;
  recordDate: string;
  tracksCategorizedBodyPart: RecordTracksCategorizedBodyPartProps[];
}

interface RecordTracksCategorizedBodyPartProps {
  bodyPart: string;
  tracks: RecordTracksProps[];
}

interface RecordTracksProps {
  machineName: string;
  weight: number;
  repeat: number;
  set: number;
}

export type {
  PostRecordProp,
  PostRecordsProps,
  RecordItemProps,
  RecordProps,
  RecordTracksCategorizedBodyPartProps,
  RecordTracksProps,
};
