import { ReactNode } from 'react';

interface RegisterItemProps {
  title: string;
  required?: boolean;
  description?: string;
  errorMessage?: string;
  children?: ReactNode;
}

function RegisterItem({
  title,
  required = false,
  description,
  errorMessage,
  children,
}: RegisterItemProps) {
  return (
    <div>
      {title}
      {required && <>*</>}
      {description && <>{description}</>}
      {children}
      {errorMessage && <>{{ errorMessage }}</>}
    </div>
  );
}

export default RegisterItem;
