import './styles.scss';
import SearchForm from '../../components/search';
import CreditItem from '../../components/creditItem';

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
        <section className="homepage-trending">
          <div className="trending-background-image">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5ec008ad51c4b27b5edfb4d2/1589724439388-N33B26SG5RUQFFUQQL6K/papers.co-vy12-simple-white-pattern-background-40-wallpaper.jpg%22"
              alt=""
            />
          </div>
          <div className="all-trending-credits">
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
            <div className="trending-item">
              <CreditItem />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
