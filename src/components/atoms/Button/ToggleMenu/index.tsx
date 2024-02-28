import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';
import ToggleItems from './ToggleItems';
import useToggleMenu from '@/hooks/useToggleMenu';
import styles from '@/components/atoms/Button/ToggleMenu/ToggleMenu.module.scss';

export interface ToggleProps {
  type: 'profile' | 'post' | 'records' | 'postReport' | 'snapShotBpx';
  id?: number;
}

function ToggleMenu({ type, id }: ToggleProps) {
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu();

  return (
    <div role="presentation" onBlur={closeMenu} className={styles.wrapper}>
      <button type="button" onClick={toggleMenu}>
        <ToggleMenuSvg />
      </button>

      {isOpen && <ToggleItems type={type} id={id} />}
    </div>
  );
}

export default ToggleMenu;
