import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CastItem from '../../components/castItem';
import CreditRecommend from '../../components/creditRecommend';
// import Pie from '../../components/pieChart/PieChart';
import { ReadMore } from '../../util/ReadMore';
import './styles.scss';

export default function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const [creditRecommend, setCreditRecommend] = useState([]);
  const [allCast, setAllCast] = useState([]);
  const [allCrew, setAllCrew] = useState([]);

  const { movieId } = useParams();

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
        setAllCrew(res.data.crew.slice(0, 6));
        setAllCast(res.data.cast.sort((a, b) => b.popularity - a.popularity));
      })
      .catch((error) => console.log(error));
  };

  const getMovieRecommend = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        setCreditRecommend(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieData();
    getMovieCast();
    getMovieRecommend();
  }, [movieId]);

  console.log(creditRecommend);
  return (
    <main className="body-content">
      <section>
        <div>Some feature</div>
      </section>
      <section className="movie-details">
        <div className="banner-image">
          <img
            src={`https://www.themoviedb.org/t/p/original${movieData.backdrop_path}`}
            alt={movieData.title}
          />
        </div>
        <div className="detail-wrapper">
          <div className="movie-poster-wrapper">
            <img
              src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieData.poster_path}`}
              alt={movieData.title}
            />
          </div>
          <div className="movie-detail">
            <div className="title-gerne">
              <h2>
                {movieData.title} {movieData.original_title && `(${movieData.original_title})`}
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
                <p className="score-point">
                  {/* <Pie percentage={movieData.vote_average * 10} size={40} /> */}
                </p>
                <span>
                  User <br /> Score
                </span>
              </div>
              <div className="toolkit">
                <ul>
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">IMDB</a>
                  </li>
                  <li>
                    <a href="#">Website</a>
                  </li>
                  <li>
                    <a href="#">
                      <span>▶ &nbsp;</span>
                      <p>Play Trailer</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="quote-line">{movieData.tagline}</div>
            <div className="overview-section">
              <h3>Overview</h3>
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
            <li key={person.id}>
              <CastItem
                imgUrl={person.profile_path}
                name={person.name}
                character={person.character || person.original_name}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className="recommend-list">
        <h3 className="cast-details-title">Recommend Movie</h3>
        <ul className="credit-list">
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
    </main>
  );
}
