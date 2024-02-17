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
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '김춘식',
  },
  {
    id: 1,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '이춘식',
  },
  {
    id: 2,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '박춘식',
  },
  {
    id: 3,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '장춘식',
  },
  {
    id: 4,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '왕족발',
  },
  {
    id: 5,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '보쌈',
  },
  {
    id: 6,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '치킨',
  },
  {
    id: 7,
    imgUrl:
      'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
    name: '탕수육',
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
