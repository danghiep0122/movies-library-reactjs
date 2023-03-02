import { Link } from 'react-router-dom';
import { PrimaryShortLogo } from '../../assets/img/icon/allIcon';

import './styles.scss';
import SearchForm from '../search';

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
            <Link to={'/toptrending/1'}>Detail</Link>
          </li>
          <li>
            <Link to={'/tvshow'}>TV Show</Link>
          </li>
        </ul>
      </section>

      <section className="search-section">
        <SearchForm />
      </section>
    </nav>
  );
}
