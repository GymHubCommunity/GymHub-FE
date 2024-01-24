//TODO: 확정된 항목으로 수정
import * as yup from 'yup';

const EMAIL_STANDARD =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
const YEAR_STANDARD = /^\d{4}$/;
const MONTH_STANDARD = /(0[1-9]|1[0-2])/;
const DAY_STANDARD = /(0[1-9]|1[0-2])/;

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .required('이메일을 입력해주세요')
    .matches(EMAIL_STANDARD, '올바른 이메일 주소가 아닙니다'),

  address: yup.string().required(),
  birthday: yup
    .object()
    .shape({
      year: yup.string().when(['month', 'day'], {
        is: (month: string, day: string) => month || day,
        then: (schema) =>
          schema
            .required('연도를 입력해주세요 (ex 2024)')
            .min(4)
            .matches(YEAR_STANDARD, '정확한 날짜를 입력해주세요'),
      }),
      month: yup.string().when(['year', 'day'], {
        is: (year: string, day: string) => year || day,
        then: (schema) =>
          schema
            .required('월을 입력해주세요 (ex 03)')
            .min(2)
            .matches(MONTH_STANDARD, '정확한 날짜를 입력해주세요'),
      }),
      day: yup.string().when(['year', 'month'], {
        is: (year: string, month: string) => year || month,
        then: (schema) =>
          schema
            .required('일을 입력해주세요 (ex 26)')
            .min(2)
            .matches(DAY_STANDARD, '정확한 날짜를 입력해주세요'),
      }),
    })
    .required(),
  introduction: yup.string().required('한 줄 소개를 입력해주세요'),
  status: yup.string().required('운동 상태를 선택해주세요'),
  careers: yup
    .array()
    .of(
      yup.object().shape({
        title: yup.string().when(['companyName', 'startDate', 'endDate'], {
          is: (companyName: string, startDate: string, endDate: string) =>
            companyName || startDate || endDate,
          then: (schema) => schema.required('제목을 입력해주세요'),
        }),
        companyName: yup.string().when(['title', 'startDate', 'endDate'], {
          is: (title: string, startDate: string, endDate: string) =>
            title || startDate || endDate,
          then: (schema) => schema.required('직장 혹은 대회 명을 입력해주세요'),
        }),
        description: yup
          .string()
          .when(['companyName', 'startDate', 'endDate'], {
            is: (companyName: string, startDate: string, endDate: string) =>
              companyName || startDate || endDate,
            then: (schema) => schema.required('내용을 입력해주세요'),
          })
          .nullable(),

        startDate: yup.string().when(['title', 'companyName', 'endDate'], {
          is: (title: string, companyName: string, endDate: string) =>
            title || companyName || endDate,
          then: (schema) => schema.required('시작일을 입력해주세요'),
        }),

        endDate: yup
          .string()
          .when('isCurrent', {
            is: false,
            then: (schema) =>
              schema.when(['title', 'startDate', 'companyName'], {
                is: (title: string, startDate: string, companyName: string) =>
                  title || startDate || companyName,
                then: (schema) => schema.required('종료일을 입력해주세요'),
              }),
          })
          .nullable(),
      }),
    )
    .nullable(),
});

export { userFormSchema };
