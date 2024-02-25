import { instance } from '@/apis/index';

interface PartProp {
  part: 'UPPER' | 'LOWER' | 'WHOLE';
}

async function getMachines({ part }: PartProp) {
  const response = await instance.get(`/machines/search?category=${part}`);
  return response.data;
}

async function getMachinesAll() {
  const response = await instance.get(`/machines/search/all`);
  return response.data;
}

export { getMachines, getMachinesAll };
