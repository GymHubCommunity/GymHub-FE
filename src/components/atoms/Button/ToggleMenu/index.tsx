import ToggleMenuSvg from '@/assets/icons/ToggleMenu';
import styles from '@/components/atoms/Button/ToggleMenu/ToggleMenu.module.scss';
import { menuItems, postItems } from '@/constants/ToggleMenu';
import useToggleMenu from '@/hooks/useToggleMenu';

interface ToggleMenuProp {
  type: 'profile' | 'post';
}

function ToggleMenu({ type }: ToggleMenuProp) {
  const { isOpen, openMenu, closeMenu } = useToggleMenu();

  return (
    <div role="presentation" onBlur={closeMenu}>
      <button type="button" onClick={openMenu}>
        <ToggleMenuSvg />
      </button>
      {isOpen && (
        <ul className={styles.menus}>
          {(type === 'profile' ? menuItems : postItems).map((val) => (
            <li
              role="presentation"
              key={val.id}
              className={styles.item}
              onMouseDown={() => console.log(val.item)}
            >
              {val.item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToggleMenu;
