'use client';

import { userFormSchema } from '@/constants/userSchema';
import useIsMounted from '@/hooks/useIsMounted';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import RegisterForm from '@/components/organisms/RegisterForm';
import { DevTool } from '@hookform/devtools';
import { useRouter } from 'next/navigation';
import { postRegister } from '@/apis/user/register';

//TODO: 이미지 업로드 기능 부착 및 api 수정
function Register() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;
  const isMounted = useIsMounted();
  const router = useRouter();

  const onSubmit = async () => {
    try {
 await postRegister({ nickname: 'aa', profileUrl: null });
      router.push('/');
    } catch (e) {
      console.log(e);
      throw Error('회원가입 실패');
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
