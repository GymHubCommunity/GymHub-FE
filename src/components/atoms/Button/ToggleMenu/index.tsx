import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';
import ToggleItems from '@/components/atoms/Button/ToggleMenu/ToggleItems';
import useToggleMenu from '@/hooks/useToggleMenu';
import { ToggleMenuProp } from '@/types/toggle';

function ToggleMenu({ type, id }: ToggleMenuProp) {
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu();

  return (
    <div role="presentation" onBlur={closeMenu}>
      <button type="button" onClick={toggleMenu}>
        <ToggleMenuSvg />
      </button>
      {isOpen && <ToggleItems type={type} id={id} />}
    </div>
  );
}

export default ToggleMenu;
