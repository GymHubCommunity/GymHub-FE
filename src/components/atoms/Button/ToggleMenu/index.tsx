import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';

export interface ToggleProps {
  close: () => void;
  toggle: () => void;
}

function ToggleMenu({ toggle, close }: ToggleProps) {
  return (
    <div role="presentation" onBlur={close}>
      <button type="button" onClick={toggle}>
        <ToggleMenuSvg />
      </button>
    </div>
  );
}

export default ToggleMenu;
