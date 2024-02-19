import ImageDeleteSvg from '@/assets/icons/ImageDeleteSvg';

interface ImageDeleteButtonProps {
  onClick: () => void;
}

function ImageDeleteButton({ onClick }: ImageDeleteButtonProps) {
  return (
    <button type="button" onClick={onClick}>
      <ImageDeleteSvg />
    </button>
  );
}

export default ImageDeleteButton;
