import { instance } from '@/apis';
import { BASE_URL } from '@/constants/common';
import { useState } from 'react';

function useToggleButton() {
  const [isSelected, setIsSelected] = useState(false);

  const handlePrivate = async () => {
    setIsSelected((prev) => !prev);

    let test = '';

    if (isSelected) {
      test = 'PRIVATE';
    } else {
      test = 'PUBLIC';
    }

    // TODO: headers 부분 변경 필요
    await instance.post(`${BASE_URL}/members/account/privacy`, null, {
      params: { policy: test },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access-Token')}`,
      },
    });
  };
  return { isSelected, handlePrivate };
}

export default useToggleButton;
