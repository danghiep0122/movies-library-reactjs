import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  ImdbIcon,
  PrimaryShortLogo
} from '../../assets/img/icon/allIcon';
import CastItem from '../../components/castItem';
import CreditRecommend from '../../components/creditRecommend';
import Image from '../../components/image';
import Pie from '../../components/pieChart/PieChart';
import { ReadMore } from '../../util/ReadMore';
import './styles.scss';

export default function TvDetails() {
  const [tvShowData, setTvShowData] = useState([]);
  const [externalData, setExternalData] = useState([]);
  const [creditRecommend, setCreditRecommend] = useState([]);
  const [allCast, setAllCast] = useState([]);
  const [allCrew, setAllCrew] = useState([]);
  const [latestSeason, setLatestSeason] = useState({});

  const { tvId } = useParams();

  const apiKey = process.env.REACT_APP_API_KEY;

  const getTvShowData = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        setTvShowData(res.data);
        setLatestSeason(res.data.seasons.pop());
      })
      .catch((error) => console.log(error));
  };

  const getTvShowCast = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        setAllCrew(res.data.crew.slice(0, 6));
        setAllCast(res.data.cast.sort((a, b) => b.popularity - a.popularity));
      })
      .catch((error) => console.log(error));
  };

  const getExternalData = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/tv/${tvId}/external_ids?api_key=${apiKey}`)
      .then((res) => {
        setExternalData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const getTvShowRecommend = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/tv/${tvId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setCreditRecommend(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTvShowData();
    getExternalData();
    getTvShowCast();
    getTvShowRecommend();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [tvId]);

  return (
    <main className="body-content">
      <section className="credit-details">
        <div className="banner-image">
          <Image srcfull={tvShowData.backdrop_path} alt={tvShowData.title} />
        </div>
        <div className="detail-wrapper">
          <div className="movie-poster-wrapper">
            <Image src={tvShowData.poster_path} alt={tvShowData.title} />
          </div>
          <div className="credit-detail">
            <div className="title-gerne">
              <h2>
                {tvShowData.title || tvShowData.name}{' '}
                {tvShowData.original_title !== tvShowData.title && `(${tvShowData.original_title})`}
              </h2>
              <h3>
                <span>TV-MA</span>
                <span
                  style={{
                    textTransform: 'uppercase'
                  }}
                >{`${tvShowData.release_date} (${tvShowData.original_language})`}</span>
                {`Drama, Action & Adventure ⏲ ${tvShowData.runtime}m`}
              </h3>
            </div>
            <div className="list-toolkits">
              <div className="score-area">
                <span className="score-point">
                  <Pie percentage={tvShowData.vote_average * 10} size={35} fontSize={'2.2rem'} />
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
            <div className="quote-line">{tvShowData.tagline}</div>
            <div className="overview-section">
              <h3>Overview</h3>
              <p>
                <ReadMore>{tvShowData.overview}</ReadMore>
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
            <Link to={`/person/${person.id}`} key={person.id}>
              <CastItem
                gender={person.gender}
                imgUrl={person.profile_path}
                name={person.name}
                character={person.character || person.original_name}
              />
            </Link>
          ))}
        </ul>
      </section>
      <section className="latest-season">
        <h2>Current Season</h2>
        <div className="season-overview">
          <div className="season-poster-wrapper">
            {latestSeason.poster_path ? (
              <img src={`https://www.themoviedb.org/t/p/w300${latestSeason.poster_path}`} alt="" />
            ) : (
              <div style={{ padding: '6px', border: '1px solid rgba(0,0,0,0.2' }}>
                <PrimaryShortLogo width={128} height={188} />
              </div>
            )}
          </div>
          <div className="latest-season-details">
            <h3>{`${latestSeason.name}`}</h3>
            <h4>
              <span>{latestSeason.air_date}</span>
              <span>{` | `}</span>
              <span>{latestSeason.episode_count}</span>
              <span> Episodes</span>
            </h4>
            <p>
              <ReadMore>{latestSeason.overview}</ReadMore>
            </p>
          </div>
        </div>
        <div className="link-to-season-page">
          <Link to={`/tv/${tvId}/seasons`}>View All Seasons</Link>
        </div>
      </section>
      <section className="recommend-list">
        <h3 className="cast-details-title">Recommend TV Shows</h3>
        <ul className="credit-list">
          {creditRecommend.map((credit) => (
            <li key={credit.id}>
              <Link to={`/tv/${credit.id}`}>
                <CreditRecommend
                  name={credit.title || credit.name}
                  score={credit.vote_average}
                  release={credit.release_date || credit.first_air_date}
                  imgUrl={credit.backdrop_path}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
