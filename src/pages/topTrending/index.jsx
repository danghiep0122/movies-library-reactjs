import './styles.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SearchSection from '../../components/searchSection';
import CreditItem from '../../components/creditItem';

export default function TopTrending({ pageTitle = 'Top Treding', type = 'tv' }) {
  const [allCredits, setAllCredits] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const getallCredits = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => setAllCredits(response.data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getallCredits();
  }, [type]);

  return (
    <main className="top-trending-page">
      <div className="content-container">
        <section className="search-with-background-section">
          <SearchSection type={type} />
        </section>
        <section className="page-title">
          <h2>{pageTitle}</h2>
        </section>
        <section className="inner-content">
          {allCredits.map((item) => (
            <Link key={item.id} to={`../${type}/${item.id}`}>
              <CreditItem
                title={item.name || item.title}
                dayRelease={item.first_air_date || item.release_date}
                vote={item.vote_average * 10}
                imgUrl={item.poster_path}
              />
            </Link>
          ))}
        </section>
        <section className="loadmore">
          <button>Load More</button>
        </section>
      </div>
    </main>
  );
}
