import axios from 'axios';
import toast from 'react-hot-toast';

async function imgDownLoad(imgUrl: string, fileName: string) {
  try {
    const res = await axios.get(imgUrl, { responseType: 'blob' });
    const blob = res.data;
    const imageUrl = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();

    window.URL.revokeObjectURL(imageUrl);
  } catch (error) {
    toast.error('이미지 다운로드 오류가 발생하였습니다.');
  }
}

export default imgDownLoad;
