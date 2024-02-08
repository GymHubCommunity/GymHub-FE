import LoginButtons from '@/components/molecules/LoginButtons';
import LoginTextButton from '@/components/atoms/Button/LoginTextButton';
import LoginInfo from '@/components/molecules/LoginInfo';
import styles from '@/components/organisms/Login/Login.module.scss';

function Login() {
  return (
    <div className={styles.wrapper}>
      <LoginInfo />
      <div className={styles.innerWrapper}>
        <LoginButtons />
        <LoginTextButton />
      </div>
    </div>
  );
}

export default Login;
