'use client';

import { usePathname } from 'next/navigation';

function useMenuColor(pathName: string) {
  const pathname = usePathname();

  let color = '';
  if (pathname === pathName) color = '#FEFEFE';
  if (pathname !== pathName) color = '#8B8E98';

  return { color };
}

export default useMenuColor;
