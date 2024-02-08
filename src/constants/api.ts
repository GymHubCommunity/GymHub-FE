const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE;

const KAKAO_AUTH_API_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_API_KEY}&redirect_uri=${API_BASE_URL}&response_type=code`;
const GOOGLE_AUTH_API_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=token/&scope=https%3A//www.googleapis.com/auth/userinfo.profile`;

export { API_BASE_URL, GOOGLE_AUTH_API_URL, KAKAO_AUTH_API_URL };
