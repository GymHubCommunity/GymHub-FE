'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

function Home() {
  const { data: session } = useSession();
  const userData = session?.user;

  return (
    <main>
      {session ? (
        <>
          {userData?.email}
          {userData?.image && (
            <Image
              src={userData.image}
              alt="프로필 이미지"
              width={200}
              height={200}
              priority
            />
          )}
          <button onClick={() => signOut({ callbackUrl: '/' })}>
            로그아웃
          </button>
        </>
      ) : (
        <button onClick={() => signIn()}>로그인</button>
      )}
    </main>
  );
}

export default Home;
