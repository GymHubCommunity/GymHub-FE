import authOptions from '@/app/api/auth/[...nextauth]/options';
import SocialSigninButton from '@/components/atoms/Button/SocialSigninButton';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';

async function Signin() {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();
  if (session) {
    return { redirect: { destination: '/' } };
  }

  return <SocialSigninButton providers={providers} />;
}

export default SigninPage;
