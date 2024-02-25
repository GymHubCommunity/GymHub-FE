interface RecordProps {
  snapshots: RecordItemProps[];
  hasNext: boolean;
}

interface RecordItemProps {
  recordId: number;
  recordDate: string;
  tracks: RecordItemTracksProps[];
}

interface RecordItemTracksProps {
  machineName: string;
  bodyPart: string;
  weight: number;
  repeat: number;
  set: number;
}

export type { RecordProps, RecordItemProps, RecordItemTracksProps };
