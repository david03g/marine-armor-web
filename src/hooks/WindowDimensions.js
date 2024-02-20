import React, { useState, useEffect } from 'react';

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Helper function to detect if the device is mobile
  function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  }

  function changeWindowSize() {
    if (isMobileDevice()) {
      // Swap width and height for a mobile device
      setWindowSize(prevSize => ({ 
        width: prevSize.height, 
        height: prevSize.width 
      }));
    } else {
      // For non-mobile devices, just update width and height normally
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }

  useEffect(() => {
    // Determine the appropriate event to listen to (resize or orientationchange)
    const handleEvent = isMobileDevice() ? "orientationchange" : "resize";

    window.addEventListener(handleEvent, changeWindowSize);

    // Cleanup
    return () => {
      window.removeEventListener(handleEvent, changeWindowSize);
    };
  }, []);

  return windowSize;
}
