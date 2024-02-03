import styles from '@/components/atoms/Title/Title.module.scss';

interface HeaderTitleProps {
  content: string;
}

function Title({ content }: HeaderTitleProps) {
  return <h1 className={styles.title}>{content}</h1>;
}

export default Title;
