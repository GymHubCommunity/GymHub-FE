'use client';

import { userFormSchema } from '@/constants/userSchema';
import useIsMounted from '@/hooks/useIsMounted';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import { UserInputRegisterProps } from '@/types/user';
import RegisterForm from '@/components/organisms/RegisterForm';
import { postRegister } from '@/apis/user/register';
import { DevTool } from '@hookform/devtools';

function Register() {
  const methods = useForm<UserInputRegisterProps>({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const { handleSubmit } = methods;

  const isMounted = useIsMounted();

  const onSubmit = async () => {};

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
