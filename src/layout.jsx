import { useEffect, useState } from 'react';

import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';
import './layout.scss';

export default function Layout() {
  const [toggleNav, setToggleNav] = useState(true);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener('scroll', function () {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setToggleNav(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setToggleNav(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);
  return (
    <main>
      <section className={toggleNav ? 'nav-bar-section' : 'hide'}>
        <NavBar />
      </section>

      <section className="body-section">
        <Outlet />
      </section>
    </main>
  );
}
