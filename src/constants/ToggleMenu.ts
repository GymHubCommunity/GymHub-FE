const ID_BAN = '이 계정 차단';
const REPORT = '신고하기';

const POST_UPDATE = '게시글 수정하기';
const POST_DELETE = '게시글 삭제하기';
const POST_REPORT = '게시글 신고하기';

const RECORD_UPDATE = '운동 기록 수정하기';
const RECORD_SAVE = '운동 기록 저장하기';
const RECORD_DELETE = '운동 기록 삭제하기';

const profileItems = [
  { id: 0, item: ID_BAN },
  { id: 1, item: REPORT },
];

const postItems = [
  { id: 0, item: POST_UPDATE },
  { id: 1, item: POST_DELETE },
  { id: 2, item: POST_REPORT },
];

const recordsItems = [
  { id: 0, item: RECORD_UPDATE },
  { id: 1, item: RECORD_SAVE },
  { id: 2, item: RECORD_DELETE },
];

export {
  ID_BAN,
  POST_DELETE,
  POST_REPORT,
  POST_UPDATE,
  RECORD_DELETE,
  RECORD_SAVE,
  RECORD_UPDATE,
  REPORT,
  postItems,
  profileItems,
  recordsItems,
};
