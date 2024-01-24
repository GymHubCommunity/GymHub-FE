import GoogleAnalytics from '@/utils/tracking/googleAnalytics';
import Hotjar from '@/utils/tracking/hotjar';
import MixPanel from '@/utils/tracking/mixpanel';

function Tracking() {
  return (
    <>
      <GoogleAnalytics />
      <Hotjar />
      <MixPanel />
    </>
  );
}

export default Tracking;
