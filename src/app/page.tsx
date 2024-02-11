import { getServerSession } from 'next-auth';
import authOptions from '@/app/api/auth/[...nextauth]/options';

async function Home() {
  const session = await getServerSession(authOptions);


  return (
    <main>
      <h1>{JSON.stringify(session)}</h1>
    </main>
  );
}

export default Home;
