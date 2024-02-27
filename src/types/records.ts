interface RecordsProps {
  date: string;
  exerciseRecords: RecordExerciseProps[];
}

interface RecordExerciseProps {
  recordId: number;
  recordDate: string;
  tracksCategorizedBodyPart: RecordCategory[];
}

interface RecordCategory {
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
  RecordsProps,
  RecordExerciseProps,
  RecordCategory,
  RecordTracksProps,
};
