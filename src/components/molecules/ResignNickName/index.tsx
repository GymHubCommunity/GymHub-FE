import styles from '@/components/molecules/ResignNickName/ResignNickName.module.scss';
import useCheckNickName from '@/hooks/useCheckNickName';
import { atom } from 'jotai';
import { ChangeEvent, ChangeEventHandler } from 'react';

export const isCheckNameAtom = atom(true);

interface NickNameProp {
  onChange: any;
}

function ResignNickName({ onChange }: NickNameProp) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>닉네임 입력하여 회원 탈퇴 진행</p>
      <input
        className={styles.input}
        placeholder="닉네임"
        onChange={onChange}
      />
    </div>
  );
}

export default ResignNickName;
