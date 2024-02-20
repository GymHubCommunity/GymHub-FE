import Svg from '@/components/atoms/Svg';

interface CommentSubmitSvgProp {
  color: string;
}

function CommentSubmitSvg({ color }: CommentSubmitSvgProp) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26">
      <rect
        x="26"
        width="26"
        height="26"
        rx="13"
        transform="rotate(90 26 0)"
        fill={color}
      />
      <path
        id="Vector"
        d="M12.3796 9.04836L8.06708 13.2904C7.94302 13.4124 7.79782 13.4726 7.63151 13.471C7.46519 13.4695 7.31732 13.405 7.18792 13.2777C7.06706 13.1504 7.00449 13.0063 7.00021 12.8453C6.99592 12.6844 7.05849 12.5402 7.18792 12.413L12.4775 7.20989C12.5555 7.1331 12.6379 7.07892 12.7245 7.04735C12.8111 7.01578 12.9047 7 13.0053 7C13.1058 7 13.1994 7.01578 13.286 7.04735C13.3727 7.07892 13.455 7.1331 13.5331 7.20989L18.8226 12.413C18.9381 12.5266 18.9972 12.6673 18.9999 12.8351C19.0026 13.0029 18.9435 13.1504 18.8226 13.2777C18.6932 13.405 18.5446 13.4687 18.3766 13.4687C18.2087 13.4687 18.06 13.405 17.9306 13.2777L13.631 9.04836L13.631 18.3845C13.631 18.5592 13.5711 18.7054 13.4513 18.8232C13.3315 18.9411 13.1828 19 13.0053 19C12.8277 19 12.6791 18.9411 12.5593 18.8232C12.4395 18.7054 12.3796 18.5592 12.3796 18.3845L12.3796 9.04836Z"
        fill="#0C0D0D"
      />
    </Svg>
  );
}

export default CommentSubmitSvg;