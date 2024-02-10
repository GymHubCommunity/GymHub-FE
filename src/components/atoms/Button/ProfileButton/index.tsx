import styles from '@/components/atoms/Button/ProfileButton/ProfileButton.module.scss';

interface ProfileButton {
  type: 'profileUpdate' | 'follow';
}

function ProfileButton({ type }: ProfileButton) {
  const profileUpdate = () => {
    // TODO: 로직 추가 필요
    console.log('프로필 수정하기 버튼');
  };
  return (
    <>
      {type === 'profileUpdate' ? (
        <button className={styles.button} onClick={profileUpdate}>
          프로필 수정하기
        </button>
      ) : (
        <button>팔로우</button>
      )}
    </>
  );
}

export default ProfileButton;
