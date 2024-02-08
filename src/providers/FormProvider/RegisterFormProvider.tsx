import { userFormSchema } from '@/constants/userSchema';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

//TODO: useForm type 주입
function RegisterFormProvider({ children }: PropsWithChildren) {
  const methods = useForm({
    mode: 'onBlur',
    resolver: yupResolver(userFormSchema),
  });

  return (
    <FormProvider {...methods}>
      {children}
      <DevTool control={methods.control} />
    </FormProvider>
  );
}

export default RegisterFormProvider;
