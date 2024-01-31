'use client';
import styles from '@/components/KakaoMap/KakaoMap.module.scss';
import { DEFAULT_LOCATION } from '@/constants/Map';
import useCurrentLocation from '@/hooks/useCurrentPosition';
import { useEffect, useRef, useState } from 'react';

//remote/global.d.ts 가 merge되면 지울 부분
declare global {
  interface Window {
    kakao: any;
  }
}
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
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(
          DEFAULT_LOCATION.LATITUDE,
          DEFAULT_LOCATION.LONGITUDE,
        ),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container.current, options));
      setMarker(new window.kakao.maps.Marker());
    });
  };

  const moveToCurrentLocation = () => {
    const { latitude, longitude } = location;
    const currentPos = new window.kakao.maps.LatLng(latitude, longitude);
    map.panTo(currentPos);

    marker.setMap(map);
    marker.setPosition(currentPos);
  };

  return (
    <>
      <button className={styles.button} onClick={moveToCurrentLocation}>
        현재 위치
      </button>
      <div className={styles.container} ref={container}></div>
    </>
  );
}

export default KakaoMap;
