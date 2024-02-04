import styles from '@/components/atoms/Button/ToggleMenu/ToggleMenu.module.scss';
import { menuItems } from '@/constants/ToggleMenu';
import useToggleMenu from '@/hooks/useToggleMenu';

function ToggleMenu() {
  const { isOpen, openMenu, closeMenu } = useToggleMenu();

  return (
    <div role="presentation" onBlur={closeMenu}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={openMenu}
      />
      {isOpen && (
        <ul className={styles.menus}>
          {menuItems.map((val) => (
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
