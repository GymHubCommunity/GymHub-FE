// TODO: API 연동시, 삭제 예정
const postProfile = {
  imgUrl:
    'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
  name: '김춘식',
  workOutTime: '5',
};

const post = {
  postContent: '오늘 하체하고 왔다... #오운완',
  imgUrl:
    'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
};

const comment = {
  imgUrl:
    'https://github.com/GymHubCommunity/GymHub-FE/assets/49686619/92f27327-255c-4f3c-8446-dc2b26b6a021',
  userName: '하체왕 김하체',
  comment: '와 하체를 하시다니 득근하세요',
};

interface ExerciseTrack {
  [trackName: string]: string;
}

const exerciseHistory: {
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

export { comment, post, postProfile, exerciseHistory };
