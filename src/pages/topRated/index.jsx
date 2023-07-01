import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SearchSection from '../../components/searchSection';
import CreditItem from '../../components/creditItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { SpinnerIcon } from '../../assets/img/icon/allIcon';
import './styles.scss';

export default function TopRatedLayOut({ pageTitle = 'Top Rated', type = 'movie' }) {
  const [creditList, setCreditList] = useState([]);
  const [newCredits, setNewCredits] = useState([]);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreListItems);
  const [page, setPage] = useState([2]);

  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const getFirstPageCredits = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then((response) => {
        const result = response.data.results;
        setCreditList(result.sort((a, b) => b.vote_average - a.vote_average));
      })
      .catch((error) => console.log(error));
  };

  const getMoreCredits = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/${type}/top_rated?api_key=${apiKey}&language=en-US&page=${
          page.length + 1
        }`
      )
      .then((response) => {
        const result = response.data.results;
        setNewCredits(result.sort((a, b) => b.vote_average - a.vote_average));
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
      setCreditList((allCredits) => [...allCredits, ...newCredits]);
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
