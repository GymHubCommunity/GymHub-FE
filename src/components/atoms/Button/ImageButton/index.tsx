import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ImageButtonProps {
  imgSrc: StaticImageData;
  alt: string;
  path?: string;
}

function ImageButton({ imgSrc, alt, path }: ImageButtonProps) {
  return (
    <Link href={path}>
      <Image width={168} height={223} src={imgSrc} alt={alt} />
    </Link>
  );
}

export default ImageButton;
