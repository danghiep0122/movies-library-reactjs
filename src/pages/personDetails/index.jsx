import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import './styles.scss';
import { ReadMore } from '../../util/ReadMore';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  ImdbIcon,
  UserIcon
} from '../../assets/img/icon/allIcon';
import Image from '../../components/image';

export default function Person() {
  const [persondata, setPersonData] = useState({});
  const [credits, setCredits] = useState([]);
  const [social, setSocial] = useState({});
  const { personId } = useParams();

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
      <div className="tool">
        <h4>ID : {personId}</h4>
      </div>
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
              <h2 className="overall-title">Personal Info</h2>
              <ul className="personal-info">
                <li>
                  <h3>Known For</h3>
                  <p>{persondata.known_for_department}</p>
                </li>
                <li>
                  <h3>Known Credit</h3>
                  <p>{credits.length}</p>
                </li>
                <li>
                  <h3>Gender</h3>
                  <p>{persondata.gender === 2 ? 'Male' : 'Female'}</p>
                </li>
                <li>
                  <h3>Birthday</h3>
                  <p>{persondata.birthday}</p>
                </li>
                <li>
                  <h3>Also Know As</h3>
                  {persondata.also_known_as ? (
                    persondata.also_known_as.map((name) => <p key={name}>{name}</p>)
                  ) : (
                    <p>N/A</p>
                  )}
                </li>
              </ul>
            </div>
          </section>
          <section className="persion-details">
            <h2>{persondata.name}</h2>
            <div className="person-bio">
              <h3>Biography</h3>
              <ReadMore>{persondata.biography || 'Loading'}</ReadMore>
            </div>
            <div className="know-for-section">
              <h3>Know For</h3>
              <div className="list-movie-tv-show">
                <ul>
                  {credits.slice(0, 10).map((item) => (
                    <li key={item.credit_id}>
                      <Link to={`/movie/${item.id}`}>
                        <div className="movie-tv-item">
                          <div className="item-img">
                            <Image
                              alt={item.title || item.name}
                              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            />
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
                    <div key={product.credit_id} className="product-row">
                      <div className="product-year">
                        <p>{product.release_date || product.first_air_date || '❔'}</p>
                      </div>
                      <div className="title">
                        <h4>{product.title || product.name}</h4>
                      </div>
                    </div>
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
