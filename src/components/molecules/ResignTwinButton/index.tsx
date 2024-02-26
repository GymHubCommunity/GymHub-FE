import ResignButton from '@/components/atoms/Button/ReSignButton';
import styles from '@/components/molecules/ResignTwinButton/ResignTwinButton.module.scss';

interface ButtonProp {
  memberId: number;
}

function ResignTwinButton({ memberId }: ButtonProp) {
  return (
    <div className={styles.wrapper}>
      <ResignButton type="cancel">취소하고 같이 운동하기</ResignButton>
      <ResignButton type="delete" memberId={memberId}>
        계정 및 데이터 영구 삭제
      </ResignButton>
    </div>
  );
}

export default ResignTwinButton;
