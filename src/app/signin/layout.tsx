import RegisterFormProvider from '@/components/FormProvider/RegisterFormProvider';
import { ReactNode } from 'react';

//TODO: 회원정보 입력 레이아웃 구성
function RegisterLayout({ children }: { children: Readonly<ReactNode> }) {
  return <RegisterFormProvider>{children}</RegisterFormProvider>;
}

export default RegisterLayout;
