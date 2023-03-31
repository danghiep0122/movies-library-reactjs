import './styles.scss';
import SearchForm from '../../components/search';
import TrendingCredits from '../../components/topTrending';
import TrailerCredits from '../../components/trailerCredits';
import TrailerModal from '../../components/trailerModal';
import { useState } from 'react';

export default function HomePage() {
  const [toggle, setToggle] = useState(false);
  return (
    <main className="homepage-main">
      <div className="homepage-body">
        <section className="search-all-form">
          <div className="background-image-wrapper">
            <img src="https://images.hdqwalls.com/wallpapers/rog-logo-red-4k-ah.jpg" alt="demo" />
          </div>
          <div>
            <div className="homepage-greeting">
              <h2 onClick={() => setToggle(true)}>Welcome.</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <SearchForm />
          </div>
        </section>
        <section className="homepage-trending-section">
          <TrendingCredits />
        </section>
        <section className="homepage-trailer-section">
          <TrailerCredits />
        </section>
        {toggle && (
          <section>
            <TrailerModal setToggle={setToggle} />
          </section>
        )}
      </div>
    </main>
  );
}
