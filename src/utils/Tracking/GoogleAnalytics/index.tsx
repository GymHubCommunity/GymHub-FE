import * as gtag from '@/libs/gtag';
import Script from 'next/script';
function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_KEY}`}
      ></Script>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_KEY}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
}

export default GoogleAnalytics;
