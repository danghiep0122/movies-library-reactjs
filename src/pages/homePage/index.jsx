import axios from 'axios';
import { useEffect, useState } from 'react';

import './styles.scss';
import { MultiSearchForm } from '../../components/search';
import TrendingCredits from '../../components/topTrending';
import TrailerCredits from '../../components/trailerCredits';
import Image from '../../components/image';

export default function HomePage() {
  const [bannerUrl, setBannerUrl] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
  const getBannerImg = async (random) => {
    await axios
      .get(url)
      .then((res) => setBannerUrl(res.data.results[random].backdrop_path))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    const random = Math.floor(Math.random(0, 19) * 10);
    getBannerImg(random);
  }, []);
  return (
    <main className="homepage-main">
      <div className="homepage-body">
        <section className="search-all-form">
          <div className="background-image-wrapper">
            <Image srcfull={bannerUrl} alt={bannerUrl} />
          </div>
          <div>
            <div className="homepage-greeting">
              <h2>Welcome.</h2>
              <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <MultiSearchForm />
          </div>
        </section>
        <section className="homepage-trending-section">
          <TrendingCredits />
        </section>
        <section className="homepage-trailer-section">
          <TrailerCredits />
        </section>
      </div>
    </main>
  );
}
