//TODO: 확정된 항목으로 수정
import * as yup from 'yup';

const EMAIL_STANDARD =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required('이메일을 입력해주세요')
    .matches(EMAIL_STANDARD, '올바른 이메일 주소가 아닙니다'),
  address: yup.string().required('주소를 입력해주세요'),
  introduction: yup.string().required('한 줄 소개를 입력해주세요'),
  status: yup.string().required('운동 상태를 선택해주세요'),
});

export { userFormSchema };
