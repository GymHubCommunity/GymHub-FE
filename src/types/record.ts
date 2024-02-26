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
  RecordProps,
  RecordItemProps,
  RecordTracksCategorizedBodyPartProps,
  RecordTracksProps,
};
