import styles from '@/styles/icon.scss';
import classNames from 'classnames';
import type { PropsWithChildren, SVGProps } from 'react';

//TODO: global color theme 변수로 수정
interface SVGElementProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  size?: number;
  color?: string;
  onClick?: () => void;
  scale?: string;
}

const cn = classNames.bind(styles);

function Svg({
  width,
  height,
  size,
  color,
  children,
  viewBox,
  scale,
  ...props
}: PropsWithChildren<SVGElementProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ?? size ?? 24}
      height={height ?? size ?? 24}
      fill={color ? color : '#BEC5CF'}
      viewBox={viewBox ?? `0 0 ${width ?? size ?? 24} ${height ?? size ?? 24}`}
      className={cn('wrapper', scale)}
      {...props}
    >
      {children}
    </svg>
  );
}

export default Svg;
