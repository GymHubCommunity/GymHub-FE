interface ImgProps {
  imgUrl: string;
  type?: string;
  size?: number;
}
interface PictureButtonProps {
  onImageChange: (image: string) => void;
}

export type { ImgProps, PictureButtonProps };
