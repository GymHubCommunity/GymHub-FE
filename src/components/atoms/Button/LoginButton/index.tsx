import styles from '@/components/atoms/Button/LoginButton/LoginButton.module.scss';
import classNames from 'classnames/bind';
import KakaoIconSvg from '@/assets/icons/KakaoIconSvg';
import GoogleIconSvg from '@/assets/icons/GoogleIconSvg';
import Text from '@/components/atoms/Text';

const cn = classNames.bind(styles);

interface LoginButtonProp {
  account: 'kakao' | 'google';
}

function LoginButton({ account }: LoginButtonProp) {
  const accountName = account === 'kakao' ? '카카오' : 'Google';

  const handleLogin = () => {
    console.log(account);
  };

  return (
    <button
      type="button"
      className={cn('button', account)}
      onClick={handleLogin}
    >
      {account === 'google' ? (
        <>
          <GoogleIconSvg />
          <Text button="button">Google로 시작하기</Text>
        </>
      ) : (
        <>
          <KakaoIconSvg />
          <Text button="button">카카오로 시작하기</Text>
        </>
      )}
    </button>
  );
}

export default LoginButton;
