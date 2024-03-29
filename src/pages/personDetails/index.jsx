import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './styles.scss';
import { ReadMore } from '../../util/ReadMore';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  ImdbIcon,
  UserIcon,
  MovieIcon,
  TVShowIcon
} from '../../assets/img/icon/allIcon';
import Image from '../../components/image';

export default function Person() {
  const [persondata, setPersonData] = useState({});
  const [credits, setCredits] = useState([]);
  const [social, setSocial] = useState({});

  const { personId } = useParams();
  const { t } = useTranslation();

  const Apikey = process.env.REACT_APP_API_KEY;
  const PersonUrl = process.env.REACT_APP_PERSON_URL;

  const urlPersonData = `${PersonUrl}${personId}?api_key=${Apikey}&language=en-US`;
  const urlCredits = `${PersonUrl}${personId}/combined_credits?api_key=${Apikey}&language=en-US`;
  const urlSocials = `${PersonUrl}${personId}/external_ids?api_key=${Apikey}&language=en-US`;

  const getPersonData = async () => {
    await axios
      .get(urlPersonData)
      .then((res) => setPersonData(res.data))
      .catch((error) => console.log(error));
  };

  const getSocialInfo = async () => {
    await axios
      .get(urlSocials)
      .then((res) => setSocial(res.data))
      .catch((error) => console.log(error));
  };

  const getAllCredits = async () => {
    await axios
      .get(urlCredits)
      .then((res) => setCredits(res.data.cast.filter((item) => item.poster_path)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPersonData();
    getAllCredits();
    getSocialInfo();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <main className="person-detail-main">
      {persondata && (
        <div className="body-wrapper">
          <section className="person-overall">
            <div className="profile-img">
              {persondata.profile_path ? (
                <Image
                  src={`https://image.tmdb.org/t/p/w500/${persondata.profile_path}`}
                  alt={persondata.name}
                />
              ) : (
                <div>{<UserIcon width="250" height="250" />}</div>
              )}
            </div>
            <div>
              <ul className="social-logo">
                <li className={social.facebook_id ? '' : 'disabled'}>
                  <a href={`https://fb.com/${social.facebook_id}`}>
                    <FacebookIcon
                      height="2rem"
                      width="2rem"
                      fill={social.facebook_id ? '#0165E1' : ''}
                    />
                  </a>
                </li>
                <li className={social.twitter_id ? '' : 'disabled'}>
                  <a href={`https://twitter.com/${social.twitter_id}`}>
                    <TwitterIcon
                      height="2rem"
                      width="2rem"
                      fill={social.twitter_id ? '#1D9BF0' : ''}
                    />
                  </a>
                </li>
                <li className={social.instagram_id ? '' : 'disabled'}>
                  <a href={`https://instagram.com/${social.instagram_id}`}>
                    <InstagramIcon
                      height="2rem"
                      width="2rem"
                      fill={social.instagram_id ? '#405de6' : ''}
                    />
                  </a>
                </li>
                <li className={social.imdb_id ? '' : 'disabled'}>
                  <a href={`https://www.imdb.com/name/${social.imdb_id}`}>
                    <ImdbIcon height="2rem" width="2rem" fill={social.imdb_id ? '#DBA506' : ''} />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="overall-title">{t('person_info')}</h2>
              <ul className="personal-info">
                <li>
                  <h3>{t('known_for')}</h3>
                  <p>{persondata.known_for_department}</p>
                </li>
                <li>
                  <h3>{t('known_credit')}</h3>
                  <p>{credits.length}</p>
                </li>
                <li>
                  <h3>{t('gender')}</h3>
                  <p>{persondata.gender === 2 ? 'Male' : 'Female'}</p>
                </li>
                <li>
                  <h3>{t('birthday')}</h3>
                  <p>{persondata.birthday}</p>
                </li>
                <li>
                  <h3>{t('aka')}</h3>
                  {persondata.also_known_as ? (
                    persondata.also_known_as.map((name) => <p key={name}>{name}</p>)
                  ) : (
                    <p>{t('n/a')}</p>
                  )}
                </li>
              </ul>
            </div>
          </section>
          <section className="persion-details">
            <h2>{persondata.name}</h2>
            <div className="person-bio">
              <h3>{t('bio')}</h3>
              <ReadMore>{persondata.biography || 'Loading'}</ReadMore>
            </div>
            <div className="know-for-section">
              <h3>{t('credit_in')}</h3>
              <div className="list-movie-tv-show">
                <ul>
                  {credits
                    .sort((a, b) => b.popularity - a.popularity)
                    .map((item) => (
                      <li key={item.credit_id}>
                        <Link to={`/${item.media_type}/${item.id}`}>
                          <div className="movie-tv-item">
                            <div className="item-img">
                              <Image alt={item.title || item.name} src={item.poster_path} />
                            </div>
                            <h4>{item.title || item.name}</h4>
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
            <div className="carreer">
              <h3>{`Acting (${credits.length})`}</h3>
              <div className="table-of-acting">
                {credits.map((product) => {
                  return (
                    <Link key={product.credit_id} to={`/${product.media_type}/${product.id}`}>
                      <div className="product-row">
                        <div className="product-year">
                          <p>{product.release_date || product.first_air_date || '❔'}</p>
                        </div>
                        <div className="media-type-icon">
                          {product.media_type === 'movie' ? (
                            <MovieIcon width="2rem" height="2rem" fill="var(--red-color)" />
                          ) : (
                            <TVShowIcon width="2rem" height="2rem" fill="var(--blue-color)" />
                          )}
                        </div>
                        <div className="title">
                          <h4>{product.title || product.name}</h4>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
