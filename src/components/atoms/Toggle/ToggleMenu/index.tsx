import styles from '@/components/atoms/Toggle/ToggleMenu/ToggleMenu.module.scss';
import { menuItems } from '@/constants/ToggleMenu';
import useToggleMenu from '@/hooks/useToggleMenu';

function ToggleMenu() {
  const { isOpen, openMenu, closeMenu } = useToggleMenu();

  return (
    <div onBlur={closeMenu}>
      <button type="button" className={styles.button} onClick={openMenu} />
      {isOpen && (
        <ul className={styles.menus}>
          {menuItems.map((val) => (
            <li
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
