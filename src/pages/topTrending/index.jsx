import { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './styles.scss';
import SearchSection from '../../components/searchSection';
import CreditItem from '../../components/creditItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { SpinnerIcon } from '../../assets/img/icon/allIcon';

export default function TopTrending({ pageTitle = 'Top Treding', type = 'tv' }) {
  const [allCredits, setAllCredits] = useState([]);
  const [newCredits, setNewCredits] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [page, setPage] = useState([2]);

  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const getFirstPageCredits = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        setAllCredits(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  const getMoreCredits = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/popular?api_key=${apiKey}&language=en-US&page=${
          page.length + 1
        }`
      )
      .then((response) => {
        setNewCredits(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPage([1, 2]);
    getFirstPageCredits();
    getMoreCredits();
  }, [type]);

  function fetchMoreListItems() {
    handleClick();
  }

  const handleClick = () => {
    setPage((page) => [...page, page.at(-1) + 1]);
    setTimeout(() => {
      getMoreCredits();
      setAllCredits((allCredits) => [...allCredits, ...newCredits]);
      setIsFetching(false);
    }, 1000);
  };

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
        <section className="loadmore-section">
          {isFetching ? (
            <div className="fetching-item-notice">
              <div className="spinning-loading-icon">
                <SpinnerIcon height="2rem" width="2rem" />
              </div>
              <span>{t('get_more')}</span>
            </div>
          ) : (
            <button onClick={() => handleClick()}>{t('load_more')}</button>
          )}
        </section>
      </div>
    </main>
  );
}
