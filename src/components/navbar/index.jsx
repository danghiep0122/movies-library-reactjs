import { Link } from 'react-router-dom';
import { DeleteBtn, HamburgerMenuIcon, PrimaryShortLogo } from '../../assets/img/icon/allIcon';

import './styles.scss';
import { useState } from 'react';

export default function NavBar() {
  const [width, setWidth] = useState(0);

  const openNav = () => {
    setWidth('100%');
  };
  const closeNav = () => {
    setWidth('0');
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
            <div className="type-title">
              <Link to={'/movie'}>Movies</Link>
            </div>
            <div className="type-selection">
              <Link to={'/movie/trending'}>Treding</Link>
              <Link to={'/movie/topRated'}>Top Rated</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">
              <Link to={'/tv'}>TV Show</Link>
            </div>
            <div className="type-selection">
              <Link to={'/tv/popular'}>Popular</Link>
              <Link to={'/tv/topRated'}>Top Rated</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">
              <Link to={'/person'}>People</Link>
            </div>
            <div className="type-selection">
              <Link to={'/person'}>Popular</Link>
            </div>
          </div>
        </section>

        <section className="navbar-hamburger-menu">
          <div onClick={openNav} className="hamburger-menu-wrapper">
            <HamburgerMenuIcon width="2rem" height="2rem" fill="var(--text-light-color)" />
          </div>
          <div onClick={closeNav} style={{ width: width }} className="navbar-modal">
            <div className="inner-navbar-content">
              <div className="close-btn">
                <DeleteBtn fill="var(--text-light-color)" />
              </div>
              <Link to={'/'}>Home</Link>
              <Link to={'/person'}>Person</Link>
              <h5>
                <Link to={'/movie/trending'}>Movies</Link>
              </h5>
              <Link to={'/movie/trending'}>Trending</Link>
              <Link to={'/movie/topRated'}>Top Rated</Link>
              <h5>
                <Link to={'/tv/topRated'}>TV Show</Link>
              </h5>
              <Link to={'/tv/popular'}>Popular</Link>
              <Link to={'/tv/topRated'}>Top Rated</Link>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
