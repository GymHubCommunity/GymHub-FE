import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';
import styles from '@/components/atoms/Button/ToggleMenu/ToggleMenu.module.scss';
import { profileItems, postItems, historyItems } from '@/constants/ToggleMenu';
import useToggleMenu from '@/hooks/useToggleMenu';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface ToggleMenuProp {
  type: 'profile' | 'post' | 'history';
}

function ToggleMenu({ type }: ToggleMenuProp) {
  const { isOpen, openMenu, closeMenu } = useToggleMenu();
  const menuItems =
    type === 'profile'
      ? profileItems
      : type === 'post'
        ? postItems
        : historyItems;

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
              onMouseDown={() => console.log(val.item)}
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
