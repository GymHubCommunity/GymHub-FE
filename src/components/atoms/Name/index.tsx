import styles from '@/components/atoms/Name/Name.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface Name {
  name: string;
  size: 'small' | 'medium' | 'large';
}

function Name({ name, size }: Name) {
  return <p className={cn('name', size)}>{name}</p>;
}

export default Name;
