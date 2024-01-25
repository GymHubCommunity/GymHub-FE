'use client';
import { baseURL } from '@/constants/URL';
import mixpanel from 'mixpanel-browser';
import { useEffect } from 'react';

/**
 * 
 * mixpanel.identify('사용자 이름') : 식별자 설정
 * mixpanel.track('Event Name') : 이벤트 추적 시작 및 별칭 설정
 * mixpanel.reset() : mixpanel 초기화  보통 로그아웃 시점에 넣어주면됌
 * 
 * ex) mixpanel.identify('NamGoongSooYeong');
      mixpanel.track('My Page', {
      'Health Type': 'bulk up', : 이벤트 분석을 위한 속성 설정 
      });
 *
 */

function MixPanel() {
  useEffect(() => {
    const currentUrl = window.location.href;
    if (currentUrl === baseURL) {
      mixpanel.init(process.env.NEXT_PUBLIC_MIXPANEL_ID as string, {
        debug: true,
        track_pageview: true,
        persistence: 'localStorage',
      });
    }
  }, []);

  return <></>;
}

export default MixPanel;
