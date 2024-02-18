'use client';
import { postOAuth } from '@/apis/oAuth';
import setAuthorizationToken from '@/libs/api/setAuthorizationToken';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

//TODO: 로딩중 컴포넌트 넣기
function CallbackOAuth(social: any) {
  const router = useRouter();
  const params = useSearchParams();
  const authCode = params.get('code');

  useEffect(() => {
    const handleLogin = async () => {
      if (authCode) {
        try {
          const data = await postOAuth(social.params.provider[0], authCode);
          localStorage.setItem('accessToken', data.data.accessToken);
          setAuthorizationToken(data.data.accessToken);
          router.push('/signin/register');
        } catch (error) {
          toast.error('인증 코드가 존재하지 않습니다.');
        }
      }
    };

    handleLogin();
  }, []);

  return <div>로딩중</div>;
}

export default CallbackOAuth;
