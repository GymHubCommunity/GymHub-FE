import ToggleMenuSvg from '@/assets/icons/ToggleMenuSvg';
import styles from '@/components/atoms/Button/ToggleMenu/ToggleMenu.module.scss';
import { postItems, profileItems, recordsItems } from '@/constants/ToggleMenu';
import useModalInfo from '@/hooks/useModalInfo';
import useToggleMenu from '@/hooks/useToggleMenu';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(styles);

interface ToggleMenuProp {
  type: 'profile' | 'post' | 'records';
}

function ToggleMenu({ type }: ToggleMenuProp) {
  const router = useRouter();
  const { isOpen, toggleMenu, closeMenu } = useToggleMenu();
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
    <div role="presentation" onBlur={closeMenu}>
      <button type="button" onClick={toggleMenu}>
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
