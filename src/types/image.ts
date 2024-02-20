interface ImgProps {
  imgUrl: string;
  type?: string;
  size?: number;
}
interface ImgUploadButtonProps {
  onImageChange: (image: string) => void;
  prop?: any;
}

export type { ImgProps, ImgUploadButtonProps };
