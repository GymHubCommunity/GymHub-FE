import PrimaryButton from '@/components/atoms/Button/PrimaryButton';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/SelectSection/SelectSection.module.scss';
import LabelSlide from '@/components/molecules/LabelSlide';
import ChecklistSlide from '@/components/molecules/ChecklistSlide';
import useSelectedPart from '@/hooks/useSelectedPart';

interface SelectSectionProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

function SelectSection({ part }: SelectSectionProp) {
  const { isActive } = useSelectedPart();

  return (
    <>
      <div className={styles.wrapper}>
        <BackButtonHeader
          pageName={
            part === 'UPPER' ? '상체' : part === 'LOWER' ? '하체' : '전신'
          }
        />
        <LabelSlide part={part} />
        <ChecklistSlide part={part} />
      </div>
      <div className={styles.footer}>
        <PrimaryButton isActive={isActive}>선택 완료</PrimaryButton>
      </div>
    </>
  );
}

export default SelectSection;
