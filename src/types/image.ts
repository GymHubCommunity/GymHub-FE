interface ImgProps {
  imgUrl: string;
  type?: string;
  size?: number;
}
interface PictureButtonProps {
  onImageChange: (image: string) => void;
  prop?: any;
}

export type { ImgProps, PictureButtonProps };
