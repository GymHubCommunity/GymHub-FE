interface UserRegisterProps {
  accessToken: TokenProp;
  userInfo: UserInfoProps;
}

interface TokenProp {
  accessToken: string;
}

interface UserInfoProps {
  id: number;
  email: string;
  profileUrl: string;
  nickname: string;
}

export type { UserRegisterProps };
