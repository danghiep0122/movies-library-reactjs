import { Link } from 'react-router-dom';
import { PrimaryShortLogo } from '../../assets/img/icon/allIcon';

import './styles.scss';

export default function NavBar() {
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
      </div>
    </nav>
  );
}
