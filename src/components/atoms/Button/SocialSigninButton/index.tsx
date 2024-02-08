'use client';

import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

interface ProviderProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

function SocialSigninButton({ providers }: ProviderProps) {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '';

  return (
    <>
      {Object.values(providers!).map((provider) => (
        <button
          onClick={() => signIn(provider.id, { callbackUrl })}
          key={provider.name}
        >
          {provider.name}로 로그인하기
        </button>
      ))}
    </>
  );
}

export default SocialSigninButton;
