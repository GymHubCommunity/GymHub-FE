import GoogleAnalytics from '@/utils/tracking/googleAnalytics';
import Hotjar from '@/utils/tracking/hotjar';

function Tracking() {
  return (
    <>
      <GoogleAnalytics />
      <Hotjar />
    </>
  );
}

export default Tracking;
