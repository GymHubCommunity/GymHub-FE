import {
  RequestCookies,
  ResponseCookies,
} from 'next/dist/compiled/@edge-runtime/cookies';
import { NextRequest, NextResponse } from 'next/server';

async function middleware(request: NextRequest) {
  const refresh = request.cookies.get('refresh')?.value;

  if (!refresh) {
    const response = NextResponse.redirect(request.url);
    response.cookies.set('refresh', refresh as string);
    applySetCookie(request, response);
    return response;
  }
}

export default middleware;

//* 사용자 정보가 없을 시 막을 페이지
export const config = {
  matcher: ['/mypage/:path*', '/post/:path*'],
};

//* 쿠키
function applySetCookie(req: NextRequest, res: NextResponse): void {
  const resCookies = new ResponseCookies(res.headers);
  const newReqHeaders = new Headers(req.headers);
  const newReqCookies = new RequestCookies(newReqHeaders);

  resCookies.getAll().forEach((cookie) => newReqCookies.set(cookie));

  NextResponse.next({
    request: { headers: newReqHeaders },
  }).headers.forEach((value, key) => {
    if (
      key === 'x-middleware-override-headers' ||
      key.startsWith('x-middleware-request-')
    ) {
      res.headers.set(key, value);
    }
  });
}
