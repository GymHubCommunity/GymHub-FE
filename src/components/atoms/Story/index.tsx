import { getPostProps } from '@/apis/Query/Post/useGetPostwithScroll';
import StoryButton from '@/components/atoms/Button/StoryButton';
import styles from '@/components/atoms/Story/Story.module.scss';
import { WriterInfoProps } from '@/types/GetPost';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Story({ posts }: getPostProps) {
  const stories: WriterInfoProps[] = posts.reduce(
    (acc: WriterInfoProps[], val) => {
      const writerId = val.writerInfo.writerId;
      const existingIndex = acc.findIndex((item) => item.writerId === writerId);
      if (existingIndex === -1) {
        acc.push(val.writerInfo);
      }
      return acc;
    },
    [],
  );
  return (
    <div className={styles.wrapper}>
      <div className={styles.todayExercise}>#오운완 인증한 친구들</div>
      <Swiper
        slidesPerView={4.4}
        spaceBetween={12}
        modules={[FreeMode]}
        className={styles.mySwiper}
      >
        {stories.map((val) => (
          <SwiperSlide key={val.writerId}>
            <StoryButton
              id={val.writerId}
              imgUrl={val.profileUrl}
              name={val.nickname}
            />
            {/* <ExerciseCount count={val.count} /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Story;
