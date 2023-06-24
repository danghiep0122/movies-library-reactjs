import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './styles.scss';
import { FacebookIcon, InstagramIcon, TwitterIcon, ImdbIcon } from '../../assets/img/icon/allIcon';
import CastItem from '../../components/castItem';
import CreditRecommend from '../../components/creditRecommend';
import Image from '../../components/image';
import Pie from '../../components/pieChart/PieChart';
import { ReadMore } from '../../util/ReadMore';
import VideoItem from '../../components/videoItem';
import { useTranslation } from 'react-i18next';

export default function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const [externalData, setExternalData] = useState([]);
  const [creditRecommend, setCreditRecommend] = useState([]);
  const [allCast, setAllCast] = useState([]);
  const [allCrew, setAllCrew] = useState([]);
  const [allVideos, setAllVideos] = useState([]);

  const recommendList = useRef();

  const { movieId } = useParams();

  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const getMovieData = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
      .then((res) => setMovieData(res.data))
      .catch((error) => console.log(error));
  };

  const getMovieCast = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        setAllCrew(res.data.crew.slice(0, 4));
        setAllCast(res.data.cast.sort((a, b) => b.popularity - a.popularity));
      })
      .catch((error) => console.log(error));
  };

  const getExternalData = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/external_ids?api_key=${apiKey}`)
      .then((res) => {
        setExternalData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getMovieRecommend = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setCreditRecommend(res.data.results.sort((a, b) => b.popularity - a.popularity));
      })
      .catch((error) => console.log(error));
  };

  const getMovieVideos = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        setAllVideos(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieData();
    getExternalData();
    getMovieCast();
    getMovieRecommend();
    getMovieVideos();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    creditRecommend.length !== 0 &&
      recommendList.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
  }, [movieId]);

  return (
    <main className="body-content">
      <section className="credit-details">
        <div className="banner-image">
          <Image srcfull={movieData.backdrop_path} alt={movieData.title} />
        </div>
        <div className="detail-wrapper">
          <div className="movie-poster-wrapper">
            <Image src={movieData.poster_path} alt={movieData.title} />
          </div>
          <div className="credit-detail">
            <div className="title-gerne">
              <h2>
                {movieData.title || movieData.name}
                {movieData.original_title !== movieData.title && `(${movieData.original_title})`}
              </h2>
              <h3>
                <span>TV-MA</span>
                <span
                  style={{
                    textTransform: 'uppercase'
                  }}
                >{`${movieData.release_date} (${movieData.original_language})`}</span>
                {`Drama, Action & Adventure ⏲ ${movieData.runtime}m`}
              </h3>
            </div>
            <div className="list-toolkits">
              <div className="score-area">
                <span className="score-point">
                  <Pie percentage={movieData.vote_average * 10} size={35} fontSize={'2.2rem'} />
                </span>
                <span>
                  User <br /> Score
                </span>
              </div>
              <div className="toolkit">
                <ul>
                  <li>
                    <a
                      className={externalData.facebook_id ? '' : 'disabled'}
                      href={`https://www.facebook.com/${externalData.facebook_id}`}
                    >
                      <FacebookIcon
                        fill={externalData.facebook_id ? '#2d86ff' : '#333'}
                        height="24"
                        width="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className={externalData.instagram_id ? '' : 'disabled'}
                      href={`https://www.instagram.com/${externalData.instagram_id}`}
                    >
                      <InstagramIcon
                        fill={externalData.instagram_id ? '#fcaf45' : '#333'}
                        height="24"
                        width="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className={externalData.twitter_id ? '' : 'disabled'}
                      href={`https://www.twitter.com/${externalData.twitter_id}`}
                    >
                      <TwitterIcon
                        fill={externalData.twitter_id ? '#2d86ff' : '#333'}
                        height="24"
                        width="24"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className={externalData.imdb_id ? '' : 'disabled'}
                      href={`https://www.imdb.com/title/${externalData.imdb_id}`}
                    >
                      <ImdbIcon
                        fill={externalData.imdb_id ? '#f5c518' : '#333'}
                        height="24"
                        width="24"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="quote-line">{movieData.tagline}</div>
            <div className="quote-line">{t('tagline', { tagline: movieData.tagline })}</div>
            <div className="overview-section">
              <h3>{t('overview')}</h3>
              <p>
                <ReadMore>{movieData.overview || ''}</ReadMore>
              </p>
            </div>
            <div className="crew-section">
              <ul>
                {allCrew.map((person) => (
                  <li key={person.credit_id}>
                    <h2>{person.name}</h2>
                    <h4>{person.job}</h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="cast-details">
        <h3 className="cast-details-title">Top Billed Cast</h3>
        <ul className="list-cast">
          {allCast.map((person) => (
            <li key={person.cast_id}>
              <Link to={`/person/${person.id}`}>
                <CastItem
                  gender={person.gender}
                  imgUrl={person.profile_path}
                  name={person.name}
                  character={person.character || person.original_name}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {creditRecommend.length !== 0 && (
        <section className="recommend-list">
          <h3 className="cast-details-title">Recommend Movie</h3>
          <ul ref={recommendList} className="credit-list">
            {creditRecommend.map((credit) => (
              <li key={credit.id}>
                <Link to={`/movie/${credit.id}`}>
                  <CreditRecommend
                    name={credit.title}
                    score={credit.vote_average}
                    release={credit.release_date}
                    imgUrl={credit.backdrop_path}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
      {allVideos.length !== 0 && (
        <section className="recommend-list">
          <div className="videos-nav-wrapper">
            <h3 className="cast-details-title">Videos ({allVideos.length})</h3>
            <Link to={`/movie/${movieId}/videos`}>
              <h2>See all</h2>
            </Link>
          </div>
          <ul className="credit-list">
            {allVideos.slice(0, 6).map(({ id, key, name }) => (
              <li key={id}>
                <VideoItem name={name} videoUrl={key} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
