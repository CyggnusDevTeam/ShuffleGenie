import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function NavBar() {
  const [isUserOnMobile, setIsUserOnMobile] = useState(false);
  const [hasResized, setHasResized] = useState(false); // State to track initial resize

  useEffect(() => {
    function handleResize() {
      setIsUserOnMobile(window.innerWidth <= 768); // Preferred breakpoint (e.g., 768px for mobile)
      setHasResized(true); // Set the flag to true on initial resize
    }

    // Initial check when the component mounts
    handleResize();

    // Add event listener for window resize with debouncing
    const debouncedHandleResize = debounce(handleResize, 1400); // Adjust the debounce delay as needed (e.g., 200ms)

    window.addEventListener('resize', debouncedHandleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  // Render null until the first resize occurs to prevent flickering
  if (!hasResized) {
    return null;
  }

  return (
    <nav className='bg-gray-3 w-full'>
      {isUserOnMobile ? <NavMobile /> : <NavDesktop />}
    </nav>
  );
}

export default NavBar;
