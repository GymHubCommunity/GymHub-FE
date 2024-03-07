import {
  getMachines,
  getMachinesAll,
  getMachinesAllProps,
  getMachinesProps,
} from '@/apis/machineController';
import CheckList from '@/components/atoms/CheckList';
import useSelectedPart from '@/hooks/useSelectedPart';
import { useEffect, useState } from 'react';
import 'swiper/css';

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
      {currentLists?.map((val) =>
        val.machines.map((val2) => (
          <CheckList key={val2.id} id={val2.id}>
            {val2.name}
          </CheckList>
        )),
      )}
    </>
  );
}

export default ChecklistSlide;
