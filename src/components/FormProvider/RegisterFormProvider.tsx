import { userFormSchema } from '@/constants/userSchema';
import { SchemaProps } from '@/types/user';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

function RegisterFormProvider({ children }: PropsWithChildren) {
  const methods = useForm<SchemaProps>({
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
