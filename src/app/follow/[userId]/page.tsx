'use client';

import FollowTwinButton from '@/components/molecules/FollowTwinButton';
import FollowSection from '@/components/organisms/FollowSection';
import BackButtonHeader from '@/components/organisms/Header/BackButtonHeader';

function FollowPage() {
  return (
    <>
      <BackButtonHeader pageName="궁수" />
      <FollowTwinButton />
      <FollowSection />
    </>
  );
}

export default FollowPage;
