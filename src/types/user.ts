interface UserRegisterProps {
  accessToken: TokenProp;
  requiredAdditionalInfo: boolean;
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

export type { UserInfoProps, UserRegisterProps };
