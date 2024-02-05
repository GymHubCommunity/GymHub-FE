import BackButton from '@/components/atoms/Button/BackButton';
import commonStyles from '@/components/organisms/Header/Header.module.scss';

interface HeaderProp {
  pageName: string;
}

function BackButtonHeader({ pageName }: HeaderProp) {
  return (
    <header className={commonStyles.wrapper}>
      <BackButton />
      <span>{pageName}</span>
    </header>
  );
}

export default BackButtonHeader;
