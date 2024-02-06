import LoginButton from '@/components/atoms/Button/LoginButton';
import styles from '@/components/molecules/LoginButtons/LoginButtons.module.scss';

function LoginButtons() {
  return (
    <div className={styles.wrapper}>
      <LoginButton account="kakao" />
      <LoginButton account="google" />
    </div>
  );
}

export default LoginButtons;
