import { NextRequest, NextResponse } from 'next/server';

async function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/signin', request.url));
}

export default middleware;

//* 사용자 정보가 없을 시 막을 페이지
export const config = {
  matcher: ['/mypage/:path*', '/post/:path*'],
};
