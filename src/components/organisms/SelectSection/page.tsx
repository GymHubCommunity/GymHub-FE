import ConfirmButton from '@/components/atoms/Button/ConfirmButton';
import ChecklistSlide from '@/components/molecules/ChecklistSlide';
import LabelSlide from '@/components/molecules/LabelSlide';
import commonStyles from '@/components/organisms/Common.module.scss';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/SelectSection/SelectSection.module.scss';
import useSelectedPart from '@/hooks/useSelectedPart';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(commonStyles);

interface SelectSectionProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

function SelectSection({ part }: SelectSectionProp) {
  const router = useRouter();
  const { isActive } = useSelectedPart();

  return (
    <>
      <div className={cn('wrapper', part)}>
        <BackButtonHeader
          pageName={
            part === 'UPPER' ? '상체' : part === 'LOWER' ? '하체' : '전신'
          }
        />
        <LabelSlide part={part} />
        <ChecklistSlide part={part} />
      </div>
      <div className={styles.footer}>
        <ConfirmButton
          onClick={() => router.push('/records/1')}
          isActive={isActive}
          title="선택 완료"
        />
      </div>
    </>
  );
}

export default SelectSection;
