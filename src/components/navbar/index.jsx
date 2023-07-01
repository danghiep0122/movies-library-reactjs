import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './styles.scss';
import { DeleteBtn, HamburgerMenuIcon, PrimaryShortLogo } from '../../assets/img/icon/allIcon';
import { LanguageChangerLarge, LanguageChangerSmall } from '../languageChanger';

export default function NavBar() {
  const [width, setWidth] = useState(0);

  const { t } = useTranslation();

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
              <Link to={'/movie'}>{t('movies')}</Link>
            </div>
            <div className="type-selection">
              <Link to={'/movie/trending'}>{t('trending')}</Link>
              <Link to={'/movie/topRated'}>{t('topRated')}</Link>
            </div>
          </div>
          <div className="type-section">
            <div className="type-title">
              <Link to={'/tv'}>{t('TV')}</Link>
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
        <LanguageChangerLarge />

        <section className="navbar-hamburger-menu">
          <div onClick={openNav} className="hamburger-menu-wrapper">
            <HamburgerMenuIcon width="2rem" height="2rem" fill="var(--text-light-color)" />
          </div>
          <div onClick={closeNav} style={{ width: width }} className="navbar-modal">
            <div className="inner-navbar-content">
              <div className="close-btn">
                <DeleteBtn fill="var(--text-light-color)" />
              </div>
              <div className="seperate-line" />
              <LanguageChangerSmall />
              <div className="seperate-line" />
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
