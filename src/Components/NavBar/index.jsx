import React, { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

function NavBar() {
  const [isUserOnMobile, setIsUserOnMobile] = useState(false);
  const [hasResized, setHasResized] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsUserOnMobile(window.innerWidth <= 800);
      setHasResized(true);
    }

    handleResize();

    const debouncedHandleResize = debounce(handleResize, 1400);

    window.addEventListener('resize', debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, []);

  if (!hasResized) {
    return null;
  }

  return (
    <>
      {isUserOnMobile ? <NavMobile /> : <NavDesktop />}
      <div />
    </>
  );
}

export default NavBar;
