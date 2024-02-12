'use client';
import styles from '@/components/atoms/Button/LoginButton/LoginButton.module.scss';
import classNames from 'classnames/bind';
import Text from '@/components/atoms/Text';
import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import GoogleIconSvg from '@/assets/icons/GoogleIconSvg';
import KakaoIconSvg from '@/assets/icons/KakaoIconSvg';

const cn = classNames.bind(styles);

export interface ProviderProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >;
}

function LoginButton({ providers }: ProviderProps) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <button
          type="button"
          onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          key={provider.name}
          className={cn('button', `${provider.id}`)}
        >
          {provider.name == 'Kakao' ? <KakaoIconSvg /> : <GoogleIconSvg />}
          <Text button="button">{provider.name}로 시작하기</Text>
        </button>
      ))}
    </>
  );
}

export default LoginButton;
