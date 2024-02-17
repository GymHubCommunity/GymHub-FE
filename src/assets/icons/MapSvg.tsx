'use client';
import Svg from '@/components/atoms/Svg';
import useMenuColor from '@/hooks/useMenuColor';

function MapSvg() {
  const { color } = useMenuColor('/map');
  return (
    <Svg width={35} height={34} viewBox="0 0 35 34">
      <path
        id="Vector"
        d="M17.5 25.9686C17.286 25.9686 17.0773 25.9354 16.8739 25.8691C16.6706 25.8028 16.4834 25.7034 16.3122 25.5708C14.4542 24.1105 12.5939 22.287 10.7313 20.1003C8.86877 17.9136 7.9375 15.5343 7.9375 12.9625C7.9375 11.3477 8.22718 9.93189 8.80655 8.71512C9.38595 7.49832 10.1312 6.47854 11.0423 5.65579C11.9535 4.83304 12.9785 4.21597 14.1174 3.8046C15.2563 3.39322 16.3838 3.18753 17.5 3.18753C18.6161 3.18753 19.7436 3.39322 20.8825 3.8046C22.0214 4.21597 23.0465 4.83304 23.9576 5.65579C24.8687 6.47854 25.614 7.49832 26.1934 8.71512C26.7727 9.93189 27.0624 11.3477 27.0624 12.9625C27.0624 15.5343 26.1312 17.9136 24.2686 20.1003C22.4061 22.287 20.5458 24.1105 18.6878 25.5708C18.5166 25.7034 18.3293 25.8028 18.126 25.8691C17.9226 25.9354 17.714 25.9686 17.5 25.9686ZM17.5 15.2291C18.1883 15.2291 18.7736 14.988 19.2558 14.5058C19.738 14.0236 19.9791 13.4384 19.9791 12.75C19.9791 12.0616 19.738 11.4764 19.2558 10.9942C18.7736 10.512 18.1883 10.2709 17.5 10.2709C16.8116 10.2709 16.2263 10.512 15.7441 10.9942C15.2619 11.4764 15.0208 12.0616 15.0208 12.75C15.0208 13.4384 15.2619 14.0236 15.7441 14.5058C16.2263 14.988 16.8116 15.2291 17.5 15.2291ZM8.99996 30.8125C8.69892 30.8125 8.44659 30.7106 8.24297 30.5069C8.03932 30.3031 7.9375 30.0507 7.9375 29.7495C7.9375 29.4483 8.03932 29.1961 8.24297 28.9926C8.44659 28.7892 8.69892 28.6875 8.99996 28.6875H26C26.301 28.6875 26.5533 28.7894 26.757 28.9931C26.9606 29.1968 27.0624 29.4493 27.0624 29.7505C27.0624 30.0516 26.9606 30.3039 26.757 30.5073C26.5533 30.7108 26.301 30.8125 26 30.8125L8.99996 30.8125Z"
        fill={color}
      />
    </Svg>
  );
}

export default MapSvg;