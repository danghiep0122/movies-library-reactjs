import { Link } from 'react-router-dom';
import { DeleteBtn, HamburgerMenuIcon, PrimaryShortLogo } from '../../assets/img/icon/allIcon';

import './styles.scss';
import { useRef } from 'react';

export default function NavBar() {
  const navbarModal = useRef();
  const openNav = () => {
    navbarModal.current.style.width = '100%';
  };
  const closeNav = () => {
    navbarModal.current.style.width = '0';
  };
  return (
    <nav>
      <div className="nav-bar-wrapper">
        <section className="logo-section">
          <Link to={'/'}>
            <PrimaryShortLogo height="2rem" />
          </Link>
        </section>

        <section className="dropdown-selection">
          <div className="type-section">
            <div className="type-title">Movies</div>
            <div className="type-selection">
              <Link to={'/movie/trending'}>Treding</Link>
              <Link to={'/movie/topRated'}>Top Rated</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">TV Show</div>
            <div className="type-selection">
              <Link to={'/tv/popular'}>Popular</Link>
              <Link to={'/tv/topRated'}>Top Rated</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">People</div>
            <div className="type-selection">
              <Link to={'/person'}>Popular</Link>
            </div>
          </div>
        </section>

        <section className="navbar-hamburger-menu">
          <div onClick={openNav} className="hamburger-menu-wrapper">
            <HamburgerMenuIcon width="2rem" height="2rem" fill="var(--text-light-color)" />
          </div>
          <div onClick={closeNav} ref={navbarModal} className="navbar-modal">
            <div className="inner-navbar-content">
              <div className="close-btn">
                <DeleteBtn fill="var(--text-light-color)" />
              </div>
              <Link to={'/'}>Home</Link>
              <Link to={'/person'}>Person</Link>
              <h5>Movies</h5>
              <Link to={'/movie/trending'}>Trending</Link>
              <Link to={'/movie/topRated'}>Top Rated</Link>
              <h5>TV Show</h5>
              <Link to={'/tv/popular'}>Popular</Link>
              <Link to={'/tv/topRated'}>Top Rated</Link>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
