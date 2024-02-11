import Login from '@/components/organisms/Login';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import authOptions from '../api/auth/[...nextauth]/options';
import { redirect } from 'next/navigation';

async function Signin() {
  const providers = await getProviders();
  const session = await getServerSession(authOptions);

  if (session) redirect('/');

  if (!providers) {
    return <span>사용 가능하지 않습니다</span>;
  }

  return <Login providers={providers} />;
}

export default Signin;
