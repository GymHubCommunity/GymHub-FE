import Svg from '@/components/atoms/Svg';

interface PlusSvgProp {
  color?: string;
}

function PlusSvg({ color = '#0C0D0D' }: PlusSvgProp) {
  return (
    <Svg size={26}>
      <path
        id="Vector"
        d="M24.5474 13.8056L24.5474 11.0962L13.8059 11.0962L13.8059 0.3547H11.0965L11.0965 11.0962L0.354946 11.0962L0.354945 13.8056L11.0965 13.8056L11.0965 24.5472H13.8059L13.8059 13.8056L24.5474 13.8056Z"
        fill={color}
      />
    </Svg>
  );
}

export default PlusSvg;
