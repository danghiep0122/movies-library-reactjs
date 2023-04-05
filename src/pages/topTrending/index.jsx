import './styles.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { SearchForm } from '../../components/search';
import Image from '../../components/image';
import CreditItem from '../../components/creditItem';
import { Link } from 'react-router-dom';

export default function TopTrending({ pageTitle = 'Top Treding', type = 'tv' }) {
  const [allCredits, setAllCredits] = useState([]);
  const [banner, setBanner] = useState('');

  const apiKey = process.env.REACT_APP_API_KEY;

  const getallCredits = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => setAllCredits(response.data.results))
      .catch((error) => console.error(error));
  };

  const getAllBanner = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then((response) => {
        const listBanner = [];
        response.data.results.map((item) => listBanner.push(item.backdrop_path));
        setBanner(listBanner[Math.floor(Math.random() * 20)]);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllBanner();
    getallCredits();
  }, [type]);

  return (
    <main className="top-trending-page">
      <div className="content-container">
        <section className="search-people-section">
          <div className="image-wrapper">
            {banner && <Image srcfull={banner} alt="loading ..." />}
          </div>
          <div className="blur-cover">
            <h2>Welcome.</h2>
            <h4>{`Millions of ${type} to discover. Explore now`}</h4>
            <SearchForm type={type} />
          </div>
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
