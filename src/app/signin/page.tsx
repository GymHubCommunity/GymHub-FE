import Login from '@/components/organisms/Login';
import { getProviders } from 'next-auth/react';

async function Signin() {
  const providers = await getProviders();

  if (!providers) {
    return <span>사용 가능하지 않습니다</span>;
  }

  return <Login providers={providers} />;
}

export default Signin;
