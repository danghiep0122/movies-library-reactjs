import axios from 'axios';
import { useEffect, useState } from 'react';

import './styles.scss';
import { ReadMore } from '../../util/ReadMore';
import { FacebookIcon, TwitterIcon, InstagramIcon, ImdbIcon } from '../../assets/img/icon/allIcon';

const urlData =
  'https://api.themoviedb.org/3/person/976?api_key=2feceab83c679d844299e10bff5e391c&language=en-US';

const urlCredits =
  'https://api.themoviedb.org/3/person/976/combined_credits?api_key=2feceab83c679d844299e10bff5e391c&language=en-US';

const urlSocials =
  'https://api.themoviedb.org/3/person/976/external_ids?api_key=2feceab83c679d844299e10bff5e391c&language=en-US';

export default function Person() {
  const [data, setData] = useState({});
  const [credits, setCredits] = useState([]);
  const [social, setSocial] = useState({});

  useEffect(() => {
    axios.get(urlData).then((res) => setData(res.data));
    axios.get(urlCredits).then((res) => setCredits(res.data.cast));
    axios.get(urlSocials).then((res) => setSocial(res.data));
  }, []);
  console.log(social);
  return (
    <main className="person-detail-main">
      <div className="tool">Some tool here</div>
      {data && (
        <div className="body-wrapper">
          <section className="person-overall">
            <div className="profile-img">
              <img
                src={data ? `https://image.tmdb.org/t/p/w500/${data.profile_path}` : ''}
                alt="profile Name"
              />
            </div>
            <div>
              <ul className="social-logo">
                <li>
                  <a href={`https://fb.com/${social.facebook_id}`}>
                    <FacebookIcon height="2rem" width="2rem" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TwitterIcon height="2rem" width="2rem" />
                  </a>
                </li>
                <li>
                  <a href={`https://instagram.com/${social.instagram_id}`}>
                    <InstagramIcon height="2rem" width="2rem" />
                  </a>
                </li>
                <li>
                  <a href={`https://www.imdb.com/name/${social.imdb_id}`}>
                    <ImdbIcon height="2rem" width="2rem" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="overall-title">Personal Info</h2>
              <ul className="personal-info">
                <li>
                  <h3>Known For</h3>
                  <p>{data.known_for_department}</p>
                </li>
                <li>
                  <h3>Known Credit</h3>
                  <p>{credits.length}</p>
                </li>
                <li>
                  <h3>Gender</h3>
                  <p>{data.gender === 2 ? 'Male' : 'Female'}</p>
                </li>
                <li>
                  <h3>Birthday</h3>
                  <p>{data.birthday}</p>
                </li>
                <li>
                  <h3>Also Know As</h3>
                  {data.also_known_as ? (
                    data.also_known_as.map((name) => <p key={name}>{name}</p>)
                  ) : (
                    <p>N/A</p>
                  )}
                </li>
              </ul>
            </div>
          </section>
          <section className="persion-details">
            <h2>{data.name}</h2>
            <div className="person-bio">
              <h3>Biography</h3>
              <ReadMore>{data.biography || 'Loading'}</ReadMore>
            </div>
            <div className="know-for-section">
              <h3>Know For</h3>
              <div className="list-movie-tv-show">
                <ul>
                  {credits.slice(0, 10).map((item) => (
                    <li key={item.id}>
                      <div className="movie-tv-item">
                        <img
                          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                          alt="profile Name"
                        />
                        <h4>{item.title}</h4>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="carreer">
              <h3>Acting</h3>
              <div className="table-of-acting">
                {credits.map((product) => {
                  return (
                    <div key={product.id} className="product-row">
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
