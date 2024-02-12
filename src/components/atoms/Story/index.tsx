import StoryButton from '@/components/atoms/Button/StoryButton';
import styles from '@/components/atoms/Story/Story.module.scss';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ExerciseCount from '../ExerciseCount';

// TODO: 타입 수정 필요
export interface StoryProps {
  stories: { id: number; imgUrl: string; name: string }[];
}

function Story({ stories }: StoryProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.todayExercise}>#오운완 인증한 친구들</div>
      <Swiper
        slidesPerView={4.4}
        spaceBetween={12}
        modules={[FreeMode]}
        className={styles.mySwiper}
      >
        {/* TODO: API 데이터로 수정 필요 */}
        {stories.map((val) => (
          <SwiperSlide key={val.id}>
            <StoryButton imgUrl={val.imgUrl} name={val.name} />
            <ExerciseCount count={5} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Story;
