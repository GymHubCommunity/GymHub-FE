import buliImg from '@/public/images/buli.png';
import choImg from '@/public/images/cho.jpeg';
import jjangImg from '@/public/images/jjang.png';
import jjangaImg from '@/public/images/jjanga.png';
import mangImg from '@/public/images/mang.png';

//@TODO: 임시파일로 API 개발 완료되고 데이터 들어오면 삭제 예정
const slideItems = [
  { id: 0, imgUrl: jjangImg },
  { id: 1, imgUrl: jjangaImg },
  { id: 2, imgUrl: buliImg },
  { id: 3, imgUrl: mangImg },
  { id: 4, imgUrl: choImg },
];

export default { slideItems };
