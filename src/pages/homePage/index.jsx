import './styles.scss';
import SearchForm from '../../components/search';
import TrendingCredits from '../../components/topTrending';

export default function HomePage() {
  return (
    <main className="homepage-main">
      <div className="homepage-body">
        <section className="search-all-form">
          <div className="background-image-wrapper">
            <img src="https://images.hdqwalls.com/wallpapers/rog-logo-red-4k-ah.jpg" alt="demo" />
          </div>
          <div>
            <div className="homepage-greeting">
              <h2>Welcome.</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <SearchForm />
          </div>
        </section>
        <section>
          <TrendingCredits />
        </section>
      </div>
    </main>
  );
}
