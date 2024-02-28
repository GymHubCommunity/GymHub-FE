interface UserRegisterProps {
  accessToken: TokenProp;
  requiredAdditionalInfo: boolean;
  userInfo: UserInfoProps;
}

interface TokenProp {
  accessToken: string;
}

interface UserInputRegisterProps {
  profileUrl?: string;
  nickname: string;
}

interface UserInfoProps extends UserInputRegisterProps {
  id: number;
  email: string;
}

export type { UserInfoProps, UserInputRegisterProps, UserRegisterProps };
