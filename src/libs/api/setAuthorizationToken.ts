import { instance } from '@/apis';

function setAuthorizationToken(access_token: string) {
  const token = localStorage.getItem(access_token);
  if (token) {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common['Authorization'];
  }
}

export default setAuthorizationToken;
