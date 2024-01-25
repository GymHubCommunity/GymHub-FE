'use client';

import RegisterItem from '@/components/Form/RegisterItem';
import RegisterFormProvider from '@/components/FormProvider/RegisterFormProvider';
import { SchemaProps } from '@/types/user';
import { useFormContext } from 'react-hook-form';

function Signin() {
  const {
    register,
    formState: { errors },
  } = useFormContext<SchemaProps>();

  return (
    <RegisterFormProvider>
      <RegisterItem title="이메일" required>
        <input placeholder="email" {...register('email')} />
      </RegisterItem>

      <RegisterItem title="주소" required>
        <input placeholder="address" {...register('address')} />
      </RegisterItem>

      <RegisterItem title="한 줄 소개" required>
        <input placeholder="introduction" {...register('introduction')} />
      </RegisterItem>
    </RegisterFormProvider>
  );
}

export default Signin;
