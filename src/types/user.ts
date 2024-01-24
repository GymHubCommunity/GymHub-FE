//TODO: 확정된 항목으로 수정

interface SchemaProps {
  email: string;
  address: string;
  birthday: BirthdayProps;
  introduction: string;
  status: string;
  careers?: CareerProps[];
}

interface BirthdayProps {
  year: string;
  month: string;
  day: string;
}

interface CareerProps {
  companyName: string;
  title: string;
  description?: string;
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
}

export type { SchemaProps };
