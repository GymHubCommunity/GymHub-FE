'use client';

import { userFormSchema } from '@/constants/userSchema';
import useIsMounted from '@/hooks/useIsMounted';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, useForm } from 'react-hook-form';
import RegisterForm from '@/components/organisms/RegisterForm';
import { DevTool } from '@hookform/devtools';

function Register() {
  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(userFormSchema),
  });

  const isMounted = useIsMounted();
  const { handleSubmit } = methods;

  return (
    <>
      {isMounted && (
        <FormProvider {...methods}>
          <RegisterForm methods={handleSubmit} />
          <DevTool control={methods.control} />
        </FormProvider>
      )}
    </>
  );
}

export default Register;
