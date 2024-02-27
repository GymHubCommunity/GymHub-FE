import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ImageButtonProps {
  href: string;
  imgSrc: StaticImageData;
  alt: string;
  path?: string;
}

function ImageButton({ imgSrc, alt, path }: ImageButtonProps) {
  return (
    <>
      {path ? (
        <Link href={path}>
          <Image width={168} height={223} src={imgSrc} alt={alt} />
        </Link>
      ) : (
        <Image width={168} height={223} src={imgSrc} alt={alt} />
      )}
    </>
  );
}

export default ImageButton;
