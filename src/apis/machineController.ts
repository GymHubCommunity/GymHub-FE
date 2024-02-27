import { instance } from '@/apis/index';

interface PartProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

export interface getMachinesProps {
  parts: {
    name: string;
    machines: {
      id: number;
      name: string;
    }[];
  }[];
}

export interface getMachinesAllProps {
  machines: {
    id: number;
    name: string;
  }[];
}

async function getMachines({ part }: PartProp) {
  const response = await instance.get<getMachinesProps>(
    `/machines/search?category=${part}`,
  );
  return response.data;
}

async function getMachinesAll() {
  const response =
    await instance.get<getMachinesAllProps>(`/machines/search/all`);
  return response.data;
}

export { getMachines, getMachinesAll };
