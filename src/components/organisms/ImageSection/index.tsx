import ImageDeleteButton from '@/components/atoms/Button/ImageDeleteButton';
import Image from 'next/image';
import styles from '@/components/organisms/ImageSection/ImageSection.module.scss';

interface ImageSectionProps {
  imageSrc: string;
  onDelete: () => void;
}

function ImageSection({ imageSrc, onDelete }: ImageSectionProps) {
  return (
    imageSrc && (
      <div className={styles.imageWrapper}>
        <ImageDeleteButton onClick={onDelete} />
        <Image width={353} height={500} src={imageSrc} alt="게시글 첨부사진" />
      </div>
    )
  );
}

export default ImageSection;
