import styles from '@/components/atoms/Slider/Slider.module.scss';
import SlideItems from '@/constants/SlideItems';

import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Slider() {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={styles.swiper}
    >
      {SlideItems.slideItems.map((val) => (
        <SwiperSlide key={val.id}>
          <Image
            fill
            objectFit="contain"
            src={val.imgUrl}
            alt="슬라이드 이미지"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
