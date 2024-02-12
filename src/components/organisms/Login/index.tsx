'use client';
import LoginTextButton from '@/components/atoms/Button/LoginTextButton';
import LoginInfo from '@/components/molecules/LoginInfo';
import styles from '@/components/organisms/Login/Login.module.scss';
import LoginButton, {
  ProviderProps,
} from '@/components/atoms/Button/LoginButton';

function Login({ providers }: ProviderProps) {
  return (
    <div className={styles.wrapper}>
      <LoginInfo />
      <div className={styles.innerWrapper}>
        <div className={styles.buttonWrapper}>
          <LoginButton providers={providers} />
        </div>
        <LoginTextButton />
      </div>
    </div>
  );
}

export default Login;
