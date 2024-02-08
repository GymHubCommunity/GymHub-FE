import LogoSvg from '@/assets/icons/LogoSvg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/LoginInfo/LoginInfo.module.scss';

function LoginInfo() {
  return (
    <div className={styles.wrapper}>
      <LogoSvg />
      <Text onBoarding="intro">
        친구들과 같이하는 운동 얘기{'\n'}지금 시작해볼까요?
      </Text>
    </div>
  );
}

export default LoginInfo;
