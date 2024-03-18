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

interface MemberInfoPageProp {
  params: { memberId: number };
}

export type {
  MemberInfoPageProp,
  QueryUserInfoProps,
  UserInfoProps,
  UserInputRegisterProps,
  UserRegisterProps,
};
