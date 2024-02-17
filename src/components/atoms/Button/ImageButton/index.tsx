import Image, { StaticImageData } from 'next/image';

interface ImageButtonProps {
  imgSrc: StaticImageData;
  alt: string;
}

function ImageButton({ imgSrc, alt }: ImageButtonProps) {
  return (
    <button>
      <Image width={168} height={223} src={imgSrc} alt={alt} />
    </button>
  );
}

export default ImageButton;
