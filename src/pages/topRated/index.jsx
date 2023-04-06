import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import CreditItem from '../../components/creditItem';
import SearchSection from '../../components/searchSection';

import './styles.scss';

export default function TopRatedLayOut({ pageTitle = 'Top Rated', type = 'movie' }) {
  const [creditList, setCreditList] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const getCreditList = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        const result = response.data.results;
        setCreditList(result.sort((a, b) => b.vote_average - a.vote_average));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCreditList();
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
          {creditList.map((item) => (
            <Link to={`/${type}/${item.id}`} key={item.id}>
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
