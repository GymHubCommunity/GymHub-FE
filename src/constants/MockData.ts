// TODO: API 연동시, 삭제 예정

const exerciseRoutines = [
  {
    id: 0,
    name: '스미스 머신 벤치 프레스',
    reps: '34kg x 10회 x 10세트',
  },
  {
    id: 1,
    name: '인클라인 덤벨 벤치 프레스',
    reps: '34kg x 10회 x 10세트',
  },
  {
    id: 2,
    name: '덤벨 플라이',
    reps: '34kg x 10회 x 10세트',
  },
  {
    id: 3,
    name: '스미스 머신 바벨 로우',
    reps: '34kg x 10회 x 10세트',
  },
];

const stories = [
  {
    id: 0,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/0ad140fa-6b1c-4cd3-977d-a3e5c4b4909f',
    name: '슬그머니',
    count: 3,
  },
  {
    id: 1,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/6f487207-3a8a-43c3-9bcc-5d16de371b50',
    name: '박정우',
    count: 5,
  },
  {
    id: 2,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/22478b7b-d763-437b-95ee-191d4b254819',
    name: '헬린이',
    count: 2,
  },
  {
    id: 3,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/026ddce6-018a-4397-b8af-71abf25c358c',
    name: '다이어트다냥',
    count: 1,
  },
  {
    id: 4,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/aeefa190-d3ff-4aaf-abae-1be64faed501',
    name: '임주영',
    count: 0,
  },
  {
    id: 5,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/afe4ce5d-0d93-46c3-b308-cf9d9557bab6',
    name: '1일1운동',
    count: 4,
  },
  {
    id: 6,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/9810fc73-ffaf-4a4d-be7b-660ad4cb34bf',
    name: '미래의짐종국',
    count: 10,
  },
  {
    id: 7,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/63100352/a9722639-e8c4-4537-8d56-20eaea8e7f0d',
    name: '오영주',
    count: 3,
  },
];

const profile = {
  name: '부리부리몬',
  imgUrl:
    'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
  postCount: '5',
  exerciseDays: '121212',
  followCount: '133',
  followingCount: '233',
};

const postProfile = {
  imgUrl:
    'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
  name: '김춘식',
  workOutTime: '5',
  exerciseArea: [
    {
      id: 0,
      name: '허벅지 운동',
      exerciseEquipment: [
        { id: 0, name: '스미스 머신 벤치 프레스', set: '34kg x 10회 x 10세트' },
        {
          id: 1,
          name: '인클라인 덤벨 벤치 프레스',
          set: '34kg x 10회 x 10세트',
        },
      ],
    },
    {
      id: 1,
      name: '가슴 운동',
      exerciseEquipment: [
        { id: 0, name: '덤벨 플라이', set: '34kg x 10회 x 10세트' },
        { id: 1, name: '스미스 머신 바벨 로우', set: '34kg x 10회 x 10세트' },
      ],
    },
  ],
};

const post = {
  postContent: '오늘 하체하고 왔다... #오운완',
  imgUrl:
    'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
};

const postRoutine = {
  postContent: '내 루틴 평가 좀 해봐 👮🏻‍♂️',
};

const comment = [
  {
    id: 0,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    userName: '하체왕 김하체',
    date: '2023.2.7 오전 12시 31분',
    comment: '와 하체를 하시다니 득근하세요',
  },
  {
    id: 1,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    userName: '상체왕 김상체',
    date: '2023.2.7 오전 12시 31분',
    comment: '상체가 최고입니다',
  },
  {
    id: 2,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    userName: '팔왕 김팔',
    date: '2023.2.7 오전 12시 32분',
    comment: '팔운동이 최고임요;',
  },
];

interface ExerciseTrack {
  [trackName: string]: string;
}

const exerciseRecords: {
  part: string;
  tracks: ExerciseTrack;
} = {
  part: '등, 허벅지',
  tracks: {
    '스미스 머신 벤치 프레스': '34kg x 10회 x 10세트',
    '인클라인 덤벨 벤치 프레스': '34kg x 10회 x 10세트',
    '덤벨 플라이': '34kg x 10회 x 10세트',
    '스미스 머신 바벨 로우': '34kg x 10회 x 10세트',
  },
};

export {
  comment,
  exerciseRecords,
  exerciseRoutines,
  post,
  postProfile,
  postRoutine,
  profile,
  stories,
};
