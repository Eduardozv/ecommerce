"use client";

import { useEffect, useState } from 'react';
import Shop from '@/components/shop-sidebar/Shop2';
import FullWidth from '@/components/full-width/FullWidth2'; // Import the component for mobile view

const ResponsiveShop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <FullWidth xl={3} lg={12} />
      ) : (
        <>
          <Shop
            order={"order-lg-last order-md-first"}
            lg={9}
            xl={4}
          />
        </>
      )}
    </>
  );
};

export default ResponsiveShop;