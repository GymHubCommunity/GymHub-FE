import styles from '@/components/atoms/Slider/Slider.module.scss';

import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export interface imgProps {
  id?: number;
  imgUrl: StaticImageData; // TODO: string으로 타입 변경에정
}

interface SliderProps {
  size: 'default' | 'large';
  imgItems: imgProps[];
}

function Slider({ size = 'default', imgItems }: SliderProps) {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className={size === 'default' ? styles.swiper : styles.large}
    >
      {imgItems.map((val) => (
        <SwiperSlide key={val.id}>
          <Image
            fill
            sizes="100%"
            priority={true}
            src={val.imgUrl}
            alt="슬라이드 이미지"
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
