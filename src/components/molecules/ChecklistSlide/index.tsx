import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import styles from '@/components/molecules/ChecklistSlide/ChecklistSlide.module.scss';
import CheckList from '@/components/atoms/CheckList';
import useSelectedPart from '@/hooks/useSelectedPart';
import { getMachines, getMachinesAll } from '@/apis/machineController';

interface ChecklistSlideProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

function ChecklistSlide({ part }: ChecklistSlideProp) {
  const { selectedId } = useSelectedPart();
  const [lists, setLists] = useState([]);
  const [allLists, setAllLists] = useState([]);
  const [currentLists, setCurrentLists] = useState([]);

  const getMachineLists = async () => {
    try {
      const result = await getMachines({ part: part });
      const allResult = await getMachinesAll();
      setLists(result.parts);
      setAllLists(allResult.machines);
      setCurrentLists(allResult.machines);
    } catch (error) {
      console.error('Error getting machine lists: ', error);
    }
  };

  useEffect(() => {
    getMachineLists();
  }, []);

  useEffect(() => {
    if (selectedId === 0) {
      setCurrentLists(allLists);
    } else {
      setCurrentLists(lists[selectedId - 1].machines);
    }
  }, [selectedId]);

  return (
    <>
      <Swiper
        direction="vertical"
        slidesPerView="auto"
        modules={[FreeMode]}
        className={styles.mySwiper}
      >
        {currentLists.map((val) => (
          <SwiperSlide key={val.id} className={styles.swiperSlide}>
            <CheckList>{val.name}</CheckList>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default ChecklistSlide;
