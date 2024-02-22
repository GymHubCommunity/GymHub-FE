import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { upperPart, lowerPart, wholePart } from '@/constants/ExerciseItems';
import PartLabel from '@/components/atoms/PartLabel';
import styles from '@/components/molecules/LabelSlide/LabelSilde.module.scss';
import useSelectedPart from '@/hooks/useSelectedPart';

interface LabelSildeProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

function LabelSlide({ part }: LabelSildeProp) {
  const { selectedId, handleLabel } = useSelectedPart();

  const labels =
    part === 'UPPER' ? upperPart : part === 'LOWER' ? lowerPart : wholePart;

  return (
    <Swiper
      slidesPerView="auto"
      modules={[FreeMode]}
      className={styles.mySwiper}
    >
      {labels.map((val) => (
        <SwiperSlide key={val.id} className={styles.swiperSlide}>
          <PartLabel
            isSelected={val.id === selectedId ? true : false}
            onClick={() => handleLabel(val)}
          >
            {val.part}
          </PartLabel>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default LabelSlide;
