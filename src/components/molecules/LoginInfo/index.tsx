import LoginLogoSvg from '@/public/icons/LoginLogo.svg';
import Text from '@/components/atoms/Text';
import styles from '@/components/molecules/LoginInfo/LoginInfo.module.scss';
import Image from 'next/image';
import { m } from 'framer-motion';
import { defaultFadeInUpVariants } from '@/constants/motion';
import LogoSvg from '@/assets/icons/LogoSvg';

function LoginInfo() {
  return (
    <div className={styles.wrapper}>
      <LogoSvg />
      <Text onBoarding="intro">
        친구들과 같이하는 운동 얘기{'\n'}지금 시작해볼까요?
      </Text>
      <m.div
        className={styles.imgWrapper}
        variants={defaultFadeInUpVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <Image src={LoginLogoSvg} alt="로고" />
      </m.div>
    </div>
  );
}

export default LoginInfo;
