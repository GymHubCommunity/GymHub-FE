import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ImageButtonProps {
  href: string;
  imgSrc: StaticImageData;
  alt: string;
}

function ImageButton({ href, imgSrc, alt }: ImageButtonProps) {
  return (
    <Link href={href}>
      <Image width={168} height={223} src={imgSrc} alt={alt} />
    </Link>
  );
}

export default ImageButton;
