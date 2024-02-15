import styles from '@/components/atoms/Button/ToggleMenu/ToggleItems/ToggleItems.module.scss';
import { postItems, profileItems, recordsItems } from '@/constants/ToggleMenu';
import useModalInfo from '@/hooks/useModalInfo';
import classNames from 'classnames/bind';
import { usePathname, useRouter } from 'next/navigation';
import { ToggleMenuProp } from '..';

const cn = classNames.bind(styles);

function ToggleItems({ type }: ToggleMenuProp) {
  const router = useRouter();
  const pathName = usePathname();
  const { showModal } = useModalInfo();
  const menuItems =
    type === 'profile'
      ? profileItems
      : type === 'post'
        ? postItems
        : recordsItems;

  const handleOnClick = (id: number) => {
    if (id === 0) {
      router.push('/records/[recordId]');
    } else if (id === 1) {
      // TODO
    } else {
      showModal();
    }
  };
  return (
    <ul className={styles.menus}>
      {pathName === '/' &&
        menuItems.map(
          (val) =>
            val.id === 2 && (
              <li
                role="presentation"
                key={val.id}
                className={styles.itemWrapper}
                onMouseDown={() => handleOnClick(val.id)}
              >
                <div className={cn('item', { delete: val.id === 2 })}>
                  {val.item}
                </div>
              </li>
            ),
        )}
      {pathName !== '/' &&
        menuItems.map((val) => (
          <li
            role="presentation"
            key={val.id}
            className={styles.itemWrapper}
            onMouseDown={() => handleOnClick(val.id)}
          >
            <div className={cn('item', { delete: val.id === 2 })}>
              {val.item}
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ToggleItems;
