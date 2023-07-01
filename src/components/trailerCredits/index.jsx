import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

import { PlayButtonIcon } from '../../assets/img/icon/allIcon';
import Image from '../image';
import TrailerModal from '../trailerModal';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function TrailerCredits() {
  const [creditType, setCreditType] = useState('movie');
  const [imgUrl, setImgUrl] = useState('');
  const [listMovies, setListMovies] = useState([]);
  const [onModal, setOnModal] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState({});

  const allTrailer = useRef();
  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const urlVideo = `https://api.themoviedb.org/3/${creditType}/popular?api_key=${apiKey}&language=en-US`;

  const getLatestVideo = async () => {
    await axios
      .get(urlVideo)
      .then((res) => {
        setListMovies(
          res.data.results
            .sort((a, b) => b.vote_average - a.vote_average)
            .filter((item) => item.backdrop_path)
        );
        setImgUrl(
          res.data.results.sort((a, b) => b.vote_average - a.vote_average).shift().backdrop_path
        );
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getLatestVideo();
    allTrailer.current.scrollTo({
      left: 0,
      behavior: 'smooth'
    });
  }, [creditType]);

  return (
    <main className="all-trailers">
      <section>
        <div className="trailer-background-image">
          <Image srcfull={imgUrl} alt="background-image" />
        </div>
        <div className="trailer-inner">
          <div className="top-navigator">
            <h2>{t('latest_trailer')}</h2>
            <div className="navigator-btn-wrapper">
              <button
                className={creditType === 'movie' ? 'active' : ''}
                onClick={() => setCreditType('movie')}
              >
                {t('movies')}
              </button>
              <button
                className={creditType === 'tv' ? 'active' : ''}
                onClick={() => setCreditType('tv')}
              >
                {t('TV')}
              </button>
            </div>
          </div>
          <div ref={allTrailer} className="all-trailer-list">
            {listMovies.map((item) => (
              <div
                key={item.id}
                onMouseOver={() => setImgUrl(item.backdrop_path)}
                className="trailer-item"
              >
                <div
                  onClick={() => {
                    if (creditType === 'movie') {
                      setTrailerUrl({
                        type: 'movie',
                        id: item.id
                      });
                      setOnModal(true);
                    } else if (creditType === 'tv') {
                      setTrailerUrl({
                        type: 'tv',
                        id: item.id
                      });
                      setOnModal(true);
                    } else {
                      return;
                    }
                  }}
                  className="trailer-background"
                >
                  <div className="trailer-play-btn">
                    <PlayButtonIcon width="8rem" height="8rem" fill="var(--white-color)" />
                  </div>
                  <Image src={item.backdrop_path} alt="hinh nen" />
                </div>
                <Link to={`/${creditType}/${item.id}`}>
                  <div className="trailer-title">
                    <h2>{item.title || item.name}</h2>
                    <h3>{item.release_date || item.first_air_date}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {onModal && <TrailerModal setOnModal={setOnModal} creditInfo={trailerUrl} />}
    </main>
  );
}
