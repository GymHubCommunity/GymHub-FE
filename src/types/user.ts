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

interface QueryUserInfoProps {
  data: UserInfoProps;
}

interface MemberIdParams {
  params: { memberId: number };
}

interface UserIdParams {
  params: { userId: number };
}

export type {
  MemberIdParams,
  QueryUserInfoProps,
  UserIdParams,
  UserInfoProps,
  UserInputRegisterProps,
  UserRegisterProps,
};
