'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';

interface ImgDownLoadProps {
  imgUrl: string;
  fileName: string;
  content: string;
}

function ImgDownLoad({ imgUrl, fileName, content }: ImgDownLoadProps) {
  const handleImageDownload = async () => {
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
      toast.error('이미지 다운로드 오류');
    }
  };

  return (
    <button type="button" onClick={handleImageDownload}>
      {content}
    </button>
  );
}

export default ImgDownLoad;
