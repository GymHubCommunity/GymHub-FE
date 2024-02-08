'use client';
import styles from '@/components/KakaoMap/KakaoMap.module.scss';
import { DEFAULT_LOCATION } from '@/constants/Map';
import useCurrentLocation from '@/hooks/useCurrentPosition';
import { useEffect, useRef, useState } from 'react';

const id = 'kakaoMap';

function KakaoMap() {
  const [map, setMap] = useState<any>(null);
  const [marker, setMarker] = useState<any>();

  const container = useRef(null);
  const location = useCurrentLocation();

  useEffect(() => {
    if (document.getElementById(id) == null) {
      const kakaoMapScript = document.createElement('script');
      kakaoMapScript.async = false;
      kakaoMapScript.id = id;
      kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
      document.head.appendChild(kakaoMapScript);

      kakaoMapScript.onload = () => {
        loadMap();
      };
    }
  }, []);

  const loadMap = () => {
    window.Kakao.maps.load(() => {
      const options = {
        center: new window.Kakao.maps.LatLng(
          DEFAULT_LOCATION.LATITUDE,
          DEFAULT_LOCATION.LONGITUDE,
        ),
        level: 3,
      };

      setMap(new window.Kakao.maps.Map(container.current, options));
      setMarker(new window.Kakao.maps.Marker());
    });
  };

  const moveToCurrentLocation = () => {
    const { latitude, longitude } = location;
    const currentPos = new window.Kakao.maps.LatLng(latitude, longitude);
    map.panTo(currentPos);

    marker.setMap(map);
    marker.setPosition(currentPos);
  };

  return (
    <>
      <button className={styles.button} onClick={moveToCurrentLocation}>
        현재 위치
      </button>
      <div className={styles.container} ref={container} />
    </>
  );
}

export default KakaoMap;
