import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import CreditItem from '../creditItem';
import './styles.scss';

export default function TrendingCredits() {
  const [times, setTimes] = useState('day');
  const [trendingList, setTrendingList] = useState([]);

  const allTrending = useRef();

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/all/${times}?api_key=${apiKey}`;

  const getTrending = async () => {
    await axios
      .get(url)
      .then((res) => setTrendingList(res.data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getTrending();
    allTrending.current.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }, [times]);

  return (
    <main className="trending-wrapper">
      <div className="trending-background-image">
        <img
          src="https://storage.pixteller.com/designs/designs-images/2019-03-27/05/simple-background-backgrounds-passion-simple-1-5c9b95bd34713.png"
          alt="background-image"
        />
      </div>
      <div className="top-navigator">
        <div className="navigator-btn-wrapper">
          <button className={times === 'day' && 'active'} onClick={() => setTimes('day')}>
            Daily
          </button>
          <button className={times === 'week' && 'active'} onClick={() => setTimes('week')}>
            Weekly
          </button>
        </div>
      </div>
      <div ref={allTrending} className="all-trending-credits">
        {trendingList.map(
          ({
            id,
            name,
            title,
            poster_path,
            release_date,
            first_air_date,
            vote_average,
            media_type
          }) => (
            <div key={id} className="trending-item">
              <Link to={`/${media_type}/${id}`}>
                <CreditItem
                  title={name || title}
                  imgUrl={poster_path}
                  dayRelease={release_date || first_air_date}
                  vote={vote_average * 10}
                />
              </Link>
            </div>
          )
        )}
      </div>
    </main>
  );
}
