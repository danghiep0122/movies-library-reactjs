import './styles.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import CreditItem from '../../components/creditItem';

export default function TopTrending() {
  const [allMovies, setAllMovies] = useState([]);

  const getAllMovies = async () => {
    await axios
      .get(
        'https://api.themoviedb.org/3/tv/popular?api_key=2feceab83c679d844299e10bff5e391c&language=en-US&page=1'
      )
      .then((response) => setAllMovies(response.data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  // console.log(allMovies);

  return (
    <main className="top-trending-page">
      <div className="content-container">
        <section className="page-title">
          <h2>page title</h2>
        </section>
        <section className="inner-content">
          {allMovies &&
            allMovies.map((item) => (
              <CreditItem
                key={item.id}
                title={item.name}
                dayRelease={item.first_air_date}
                vote={item.vote_average * 10}
                imgUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
            ))}
        </section>
        <section className="loadmore">
          <button>Load More</button>
        </section>
      </div>
    </main>
  );
}
