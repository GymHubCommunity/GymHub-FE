'use client';
import { postOAuth } from '@/apis/oAuth';
import setAuthorizationToken from '@/libs/api/setAuthorizationToken';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

function CallbackKakao() {
  const router = useRouter();
  const params = useSearchParams();
  const authCode = params.get('code');

  useEffect(() => {
    const handleLogin = async () => {
      if (authCode) {
        const data = await postOAuth(authCode);
        setAuthorizationToken(data.data.accessToken);
        router.push('/signin/register');
      } else {
        throw Error('인증 코드가 존재하지 않습니다.');
      }
    };

    handleLogin();
  }, []);

  return;
}

export default CallbackKakao;
