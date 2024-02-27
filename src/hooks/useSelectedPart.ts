import { atom, useAtom } from 'jotai';
import { useEffect } from 'react';

const selectedIdAtom = atom(0);
const selectedNumAtom = atom(0);
const isActiveAtom = atom(false);
const selectedMachinesAtom = atom<any[]>([]);

function useSelectedPart() {
  const [selectedId, setSelectedId] = useAtom(selectedIdAtom);
  const [selectedNum, setSelectedNum] = useAtom(selectedNumAtom);
  const [isActive, setIsActive] = useAtom(isActiveAtom);
  const [selectedMachines, setSelectedMachines] = useAtom(selectedMachinesAtom);

  const handleLabel = (val: { id: number }) => {
    setSelectedId(val.id);
  };

  const handleChecklist = (id: number, name: string) => {
    if (selectedMachines.includes(name)) {
      if (selectedNum === 1) setIsActive(false);
      setSelectedNum(selectedNum - 1);
      setSelectedMachines(
        selectedMachines.filter((machine) => machine !== name),
      );
      return false;
    } else {
      setIsActive(true);
      setSelectedNum(selectedNum + 1);
      setSelectedMachines([...selectedMachines, { id, name }]);
      return true;
    }
  };

  useEffect(() => {
    setSelectedId(0);

    return () => {
      setSelectedMachines([]);
    };
  }, []);

  return {
    selectedId,
    handleLabel,
    selectedNum,
    isActive,
    selectedMachines,
    handleChecklist,
    setSelectedMachines,
  };
}

export default useSelectedPart;
