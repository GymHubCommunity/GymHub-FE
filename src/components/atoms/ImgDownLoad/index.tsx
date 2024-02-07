import imgDownLoad from '@/utils/ImgDownLoad';

interface ImgDownLoadProps {
  imgUrl: string;
  fileName: string;
  content: string;
}

function ImgDownLoad({ imgUrl, fileName, content }: ImgDownLoadProps) {
  return (
    <button type="button" onClick={() => imgDownLoad(imgUrl, fileName)}>
      {content}
    </button>
  );
}

export default ImgDownLoad;
