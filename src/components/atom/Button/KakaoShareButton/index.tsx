'use client';

import { useEffect } from 'react';

//TODO: 데이터 추가 및 디자인 입히기
function KakaoShareButton() {
  useEffect(() => {
    const id = 'kakao-sdk';
    if (document.getElementById(id) == null) {
      const script = document.createElement('script');
      script.id = id;
      script.src = 'https://developers.kakao.com/sdk/js/kakao.js';
      script.onload = () => {
        window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_SHARE_KEY);
        window.Kakao.isInitialized();
      };
      document.body.appendChild(script);
    }
  }, []);

  const kakaoShare = () => {
    window.Kakao.Share.sendCustom({
      installTalk: true,
      templateId: 103530,
      templateArgs: {},
    });
  };

  return <button onClick={kakaoShare}>카카오톡 공유 버튼</button>;
}

export default KakaoShareButton;
