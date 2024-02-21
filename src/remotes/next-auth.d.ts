import NextAuth, { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface JWT {
    user: {
      profileUrl?: string;
      nickname?: string;
    } & DefaultSession['user'];
  }
}
