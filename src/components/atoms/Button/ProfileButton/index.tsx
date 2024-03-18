import styles from '@/components/atoms/Button/ProfileButton/ProfileButton.module.scss';
import Link from 'next/link';

interface ProfileButton {
  type: 'profileUpdate' | 'follow';
  memberId: number;
}

function ProfileButton({ type, memberId }: ProfileButton) {
  return (
    <>
      {type === 'profileUpdate' ? (
        <Link href={`/editprofile/${memberId}`} className={styles.button}>
          프로필 수정하기
        </Link>
      ) : (
        <button>팔로우</button>
      )}
    </>
  );
}

export default ProfileButton;
