import styles from '@/components/atoms/Button/ToggleMenu/ToggleItems/ToggleItems.module.scss';
import useToggleItems from '@/hooks/useToggleItems';
import { ToggleMenuProp } from '@/types/toggle';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

function ToggleItems({ type, recordId, snapShotId }: ToggleMenuProp) {
  const { pathName, menuItems, handleOnClick } = useToggleItems({ type });

  return (
    <ul className={styles.menus}>
      {/* pathName 부분을 나중에 본인 아이디인지 아닌지에 따라서 나누면 됩니다. */}
      {pathName === '/mypage'
        ? menuItems.map(
            (val) =>
              val.id !== 2 && (
                <li
                  role="presentation"
                  key={val.id}
                  className={styles.itemWrapper}
                  onMouseDown={() => handleOnClick(val.item)}
                >
                  <div className={cn('item', { delete: val.id === 1 })}>
                    {val.item}
                  </div>
                </li>
              ),
          )
        : menuItems.map((val) => (
            <li
              role="presentation"
              key={val.id}
              className={styles.itemWrapper}
              onMouseDown={() => handleOnClick(val.item, recordId, snapShotId)}
            >
              <div
                className={cn('item', {
                  delete:
                    val.item.includes('삭제하기') ||
                    val.item.includes('신고하기'),
                })}
              >
                {val.item}
              </div>
            </li>
          ))}
    </ul>
  );
}

export default ToggleItems;
