import * as yup from 'yup';

const EMAIL_STANDARD =
  /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

const userFormSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .matches(EMAIL_STANDARD, '올바른 이메일 주소가 아닙니다'),
  address: yup.string(),
  introduction: yup.string(),
  status: yup.string(),
  nickname: yup
    .string()
    .min(2)
    .max(12, '닉네임은 12글자 이내로 입력해주세요.')
    .matches(
      /^[0-9|a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/,
      '특수문자, 띄어쓰기 없이 입력해주세요.',
    )
    .required(''),
});

export { userFormSchema };
