import Svg from '@/components/atoms/Svg';

function ProfileImgSvg() {
  return (
    <Svg size={128} color="#4C4E56">
      <circle cx="64" cy="64" r="64" fill="#202124" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M80 48C80 56.84 72.84 64 64 64C55.16 64 48 56.84 48 48C48 39.16 55.16 32 64 32C72.84 32 80 39.16 80 48ZM32 88C32 77.36 53.32 72 64 72C74.68 72 96 77.36 96 88V96H32V88Z"
      />
    </Svg>
  );
}

export default ProfileImgSvg;
