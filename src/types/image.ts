interface ImgProps {
  imgUrl: string | Array<string> | null;
  type?: string;
  size?: number;
}
interface ImgUploadButtonProps {
  onImageChange: (image: string) => void;
  prop?: any;
}

export type { ImgProps, ImgUploadButtonProps };
