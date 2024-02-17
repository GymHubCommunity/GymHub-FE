import Text from '@/components/atoms/Text';
import { useRouter } from 'next/navigation';

function DirectInputButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.push('/records/add/direct')}>
      <Text records="directInput">직접 입력하기</Text>
    </button>
  );
}

export default DirectInputButton;
