import styles from '@/components/atoms/Name/Name.module.scss';

interface Name {
  name: string;
}

function Name({ name }: Name) {
  return <p className={styles.name}>{name}</p>;
}

export default Name;
