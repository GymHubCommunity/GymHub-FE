import PrimaryButton from '@/components/atoms/Button/PrimaryButton';
import CheckList from '@/components/atoms/CheckList';
import PartLabel from '@/components/atoms/PartLabel';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';
import styles from '@/components/organisms/SelectSection/SelectSection.module.scss';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { upperBody, upperPart } from '@/constants/ExerciseItems';
import { useState } from 'react';

interface SelectSectionProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

function SelectSection({ part }: SelectSectionProp) {
  const [selectedId, setSelectedId] = useState(0);
  const handleLabel = (val) => {
    setSelectedId(val.id);
  };

  return (
    <div className={styles.wrapper}>
      <BackButtonHeader
        pageName={
          part === 'UPPER' ? '상체' : part === 'LOWER' ? '하체' : '전신'
        }
      />

      {/* TODO: API 데이터로 수정 필요 */}
      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        modules={[FreeMode]}
        className={styles.mySwiper}
      >
        {upperPart.map((val) => (
          <SwiperSlide key={val.id}>
            <PartLabel
              isSelected={val.id === selectedId ? true : false}
              onClick={() => handleLabel(val)}
            >
              {val.part}
            </PartLabel>
          </SwiperSlide>
        ))}
      </Swiper>
      <PrimaryButton>선택 완료</PrimaryButton>
    </div>
  );
}

export default SelectSection;
