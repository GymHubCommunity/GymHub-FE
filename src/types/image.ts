interface ImgProps {
  imgUrl: string | Array<string> | null;
  type?: string;
  size?: number;
}
interface ImgUploadButtonProps {
  onImageChange: (image: string) => void;
  userImg?: string;
  prop?: any;
}

export type { ImgProps, ImgUploadButtonProps };
