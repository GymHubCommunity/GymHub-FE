'use client';
import { postOAuth } from '@/apis/oAuth';
import Loading from '@/components/atoms/Loading';
import useLoginUser from '@/hooks/useLoginUser';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

function CallbackOAuth(social: any) {
  const router = useRouter();
  const params = useSearchParams();
  const authCode = params.get('code');
  const [, setUser] = useLoginUser();

  useEffect(() => {
    const handleLogin = async () => {
      if (authCode) {
        try {
          const data = await postOAuth(social.params.provider[0], authCode);
          localStorage.setItem('accessToken', data.data.accessToken);
          setUser(data.data.userInfo);

          if (!data.data.requiredAdditionalInfo) {
            router.push('/');
          } else {
            router.push('/signin/register');
          }
        } catch (error) {
          toast.error('인증 코드가 존재하지 않습니다.');
        }
      }
    };

    handleLogin();
  }, []);

  return <Loading />;
}

export default CallbackOAuth;
