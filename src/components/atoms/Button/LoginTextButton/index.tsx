import Text from '@/components/atoms/Text';

function LoginTextButton() {
  const handleWithoutLogin = () => {};

  return (
    <button type="button" onClick={handleWithoutLogin}>
      <Text onBoarding="inputExplain">먼저 둘러볼래요</Text>
    </button>
  );
}

export default LoginTextButton;
