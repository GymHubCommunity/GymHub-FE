interface ImgProps {
  imgUrl: string | Array<string> | null;
  type?: string;
  size?: number;
}
interface PictureButtonProps {
  onImageChange: (image: string) => void;
}

export type { ImgProps, PictureButtonProps };
