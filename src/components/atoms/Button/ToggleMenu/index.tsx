import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';
import styles from '@/components/atoms/Button/ToggleMenu/ToggleMenu.module.scss';
import { profileItems, postItems, historyItems } from '@/constants/ToggleMenu';
import useToggleMenu from '@/hooks/useToggleMenu';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(styles);

interface ToggleMenuProp {
  type: 'profile' | 'post' | 'history';
}

function ToggleMenu({ type }: ToggleMenuProp) {
  const router = useRouter();
  const { isOpen, openMenu, closeMenu } = useToggleMenu();
  const menuItems =
    type === 'profile'
      ? profileItems
      : type === 'post'
        ? postItems
        : historyItems;

  const handleOnClick = (id: number) => {
    if (id === 0) {
      router.push('/history/edit');
    } else if (id === 1) {
      // TODO
    } else {
      // modal
    }
  };

  return (
    <div role="presentation" onBlur={closeMenu}>
      <button type="button" onClick={openMenu}>
        <ToggleMenuSvg />
      </button>
      {isOpen && (
        <ul className={styles.menus}>
          {menuItems.map((val) => (
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
      )}
    </div>
  );
}

export default ToggleMenu;
