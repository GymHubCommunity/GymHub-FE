import {
  getMachines,
  getMachinesAll,
  getMachinesAllProps,
  getMachinesProps,
} from '@/apis/machineController';
import CheckList from '@/components/atoms/CheckList';
import styles from '@/components/molecules/ChecklistSlide/ChecklistSlide.module.scss';
import useSelectedPart from '@/hooks/useSelectedPart';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ChecklistSlideProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

function ChecklistSlide({ part }: ChecklistSlideProp) {
  const { selectedId } = useSelectedPart();
  const [lists, setLists] = useState<getMachinesProps[]>([]);
  const [allLists, setAllLists] = useState<getMachinesAllProps[]>([]);
  const [currentLists, setCurrentLists] = useState<getMachinesAllProps[]>([]);

  const getMachineLists = async () => {
    try {
      const result = await getMachines({ part: part });
      const allResult = await getMachinesAll();

      setLists([result]);
      setAllLists([allResult]);
      setCurrentLists([allResult]);
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
      setCurrentLists(lists[selectedId - 1]?.parts);
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
        {currentLists?.map((val) =>
          val.machines.map((val2) => (
            <SwiperSlide key={val2.id} className={styles.swiperSlide}>
              <CheckList>{val2.name}</CheckList>
            </SwiperSlide>
          )),
        )}
      </Swiper>
    </>
  );
}

export default ChecklistSlide;
