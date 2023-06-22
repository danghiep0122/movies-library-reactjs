import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';
import { DeleteBtn, HamburgerMenuIcon, PrimaryShortLogo } from '../../assets/img/icon/allIcon';

export default function NavBar() {
  const [width, setWidth] = useState(0);

  const { t } = useTranslation();

  const openNav = () => {
    setWidth('100%');
  };
  const closeNav = () => {
    setWidth('0');
  };

  const handleChangeLanguage = (e) => {
    const href = window.location.pathname;
    window.location.href = `${href}?lng=${e.target.value}`;
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
              <Link to={'/movie'}>{t('movies')}</Link>
            </div>
            <div className="type-selection">
              <Link to={'/movie/trending'}>{t('trending')}</Link>
              <Link to={'/movie/topRated'}>{t('topRated')}</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">
              <Link to={'/tv'}>{t('tvShow')}</Link>
            </div>
            <div className="type-selection">
              <Link to={'/tv/popular'}>{t('popular')}</Link>
              <Link to={'/tv/topRated'}>{t('topRated')}</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">
              <Link to={'/person'}>{t('people')}</Link>
            </div>
            <div className="type-selection">
              <Link to={'/person'}>{t('popular')}</Link>
            </div>
          </div>
        </section>
        <section>
          <button value="en" onClick={handleChangeLanguage}>
            En
          </button>
          <button value="vi" onClick={handleChangeLanguage}>
            Vi
          </button>
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
              <Link to={'/'}>{t('home')}</Link>
              <Link to={'/person'}>{t('people')}</Link>
              <h5>
                <Link to={'/movie/trending'}>{t('movies')}</Link>
              </h5>
              <Link to={'/movie/trending'}>{t('trending')}</Link>
              <Link to={'/movie/topRated'}>{t('topRated')}</Link>
              <h5>
                <Link to={'/tv/topRated'}>{t('tvShow')}</Link>
              </h5>
              <Link to={'/tv/popular'}>{t('popular')}</Link>
              <Link to={'/tv/topRated'}>{t('topRated')}</Link>
            </div>
          </div>
        </section>
      </div>
    </nav>
  );
}
