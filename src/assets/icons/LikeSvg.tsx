import Svg from '@/components/atoms/Svg';

interface LikeSvgProps {
  type: boolean;
}

function LikeSvg({ type }: LikeSvgProps) {
  let color = '';
  if (type === true) color = '#C7F640';
  if (type === false) color = '#8E9098';
  return (
    <Svg size={18} viewBox="6 5 18 18">
      <path
        id="Vector"
        d="M7 15.4469C7 13.5547 7.52034 11.7159 8.56102 9.93055C9.6017 8.14521 11.0287 6.57542 12.842 5.22117C13.1853 4.95576 13.5453 4.92923 13.922 5.14155C14.2988 5.35386 14.4871 5.6795 14.4871 6.11848V7.06744C14.4871 7.75175 14.7524 8.34962 15.283 8.86105C15.8137 9.37249 16.4393 9.6282 17.16 9.6282C17.4759 9.6282 17.7819 9.56365 18.078 9.43453C18.374 9.30542 18.6458 9.12108 18.8933 8.8815C19.0356 8.73089 19.2041 8.64302 19.399 8.6179C19.5939 8.5928 19.7754 8.64767 19.9436 8.78253C20.8995 9.57156 21.6479 10.5525 22.1887 11.7252C22.7296 12.898 23 14.1386 23 15.4469C23 17.1239 22.5767 18.6313 21.7302 19.9691C20.8837 21.3069 19.787 22.3028 18.4399 22.957C18.7832 22.5596 19.0512 22.1077 19.2441 21.6013C19.4369 21.0949 19.5333 20.554 19.5333 19.9788C19.5333 19.3547 19.4205 18.7601 19.1948 18.1949C18.9692 17.6297 18.6451 17.1254 18.2225 16.6821L15 13.3747L11.8041 16.6821C11.3706 17.1369 11.0394 17.6422 10.8103 18.1981C10.5812 18.754 10.4667 19.3476 10.4667 19.9788C10.4667 20.554 10.5631 21.0949 10.7559 21.6013C10.9488 22.1077 11.2168 22.5596 11.5601 22.957C10.213 22.3028 9.11627 21.3069 8.26976 19.9691C7.42325 18.6313 7 17.1239 7 15.4469ZM15 15.7224L17.082 17.8613C17.3569 18.1497 17.5675 18.4717 17.7138 18.8275C17.8602 19.1833 17.9333 19.567 17.9333 19.9788C17.9333 20.8137 17.6478 21.526 17.0769 22.1156C16.506 22.7052 15.8137 23 15 23C14.1863 23 13.494 22.7052 12.9231 22.1156C12.3522 21.526 12.0667 20.8137 12.0667 19.9788C12.0667 19.5857 12.1381 19.2084 12.281 18.8469C12.4239 18.4854 12.6363 18.1568 12.918 17.8613L15 15.7224Z"
        fill={color}
      />
    </Svg>
  );
}

export default LikeSvg;