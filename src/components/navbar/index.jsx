import { Link } from 'react-router-dom';
import { PrimaryShortLogo } from '../../assets/img/icon/allIcon';

import './styles.scss';

export default function NavBar() {
  return (
    <nav>
      <section className="logo-section">
        <Link to={'/'}>
          <PrimaryShortLogo height="2rem" />
        </Link>
      </section>

      <section className="navigator-section">
        <ul className="navigator-list">
          <li>
            <Link to={'/toptrending'}>Top Trending</Link>
          </li>
          <li>
            <Link to={'/movie/597'}>Movie Detail</Link>
          </li>
          <li>
            <Link to={'/toprated'}>Top Rated</Link>
          </li>
          <li>
            <Link to={'/person'}>Popular People</Link>
          </li>
        </ul>
      </section>

      <section className="dropdown">
        <div className="main">
          <div className="father">
            <div className="brother">Movies</div>
            <div className="son">
              <Link to={'/movie/trending'}>Treding</Link>
              <Link to={'/movie/topRated'}>Top Rated</Link>
              <Link to={'/movie/latest'}>Latest</Link>
            </div>
          </div>
          <div className="father">
            <div className="brother">TV Show</div>
            <div className="son">
              <Link to={'/tv/popular'}>Popular</Link>
              <Link to={'/tv/topRated'}>Top Rated</Link>
              <Link to={'/tv/latest'}>Latest</Link>
            </div>
          </div>
        </div>
      </section>
    </nav>
  );
}
