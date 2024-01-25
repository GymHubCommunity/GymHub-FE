import GoogleAnalytics from '@/utils/Tracking/GoogleAnalytics';
import Hotjar from '@/utils/Tracking/Hotjar';
import MixPanel from '@/utils/Tracking/Mixpanel';

function Tracking() {
  if (process.env.NODE_ENV === 'production') {
    return (
      <>
        <GoogleAnalytics />
        <Hotjar />
        <MixPanel />
      </>
    );
  }
}

export default Tracking;
