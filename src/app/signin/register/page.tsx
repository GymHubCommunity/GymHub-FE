'use client';

import { userFormSchema } from '@/constants/userSchema';
import useIsMounted from '@/hooks/useIsMounted';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import RegisterForm from '@/components/organisms/RegisterForm';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';
import { postRegister } from '@/apis/user/register';
import { UserInputRegisterProps } from '@/types/user';

function Register() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;
  const isMounted = useIsMounted();
  const router = useRouter();

  const onSubmit = async (data: UserInputRegisterProps) => {
    try {
      await postRegister(data.nickname, data?.profileUrl);
      router.push('/');
    } catch (e) {
      throw Error('회원가입에 실패하였습니다');
    }
  };

  return (
    <>
      {isMounted && (
        <FormProvider {...methods}>
          <RegisterForm onSubmit={handleSubmit(onSubmit)} />
          <DevTool control={methods.control} />
        </FormProvider>
      )}
    </>
  );
}

export default Register;
