'use client';

import { DEFAULT_LOCATION } from '@/constants/Map';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

function useCurrentLocation() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 30000,
      timeout: 27000,
    });
  }, []);

  const success = (pos: GeolocationPosition) => {
    setLocation({
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
    });
  };

  const error = () => {
    toast.error('위치 정보를 가져오는데 실패했습니다.');
    setLocation({
      latitude: DEFAULT_LOCATION.LATITUDE,
      longitude: DEFAULT_LOCATION.LONGITUDE,
    });
  };
  return location;
}

export default useCurrentLocation;
