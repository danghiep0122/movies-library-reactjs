import axios from 'axios';
import { useEffect, useState } from 'react';
import CastItem from '../../components/castItem';
// import Pie from '../../components/pieChart/PieChart';
import { ReadMore } from '../../util/ReadMore';
import './styles.scss';

export default function MovieDetail() {
  const [movieData, setMovieData] = useState([]);
  const [allCast, setAllCast] = useState([]);
  const [allCrew, setAllCrew] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  // const link =
  //   'https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US';

  const getMovieData = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/10483?api_key=${apiKey}&language=en-US`)
      .then((res) => setMovieData(res.data))
      .catch((error) => console.log(error));
  };

  const getMovieCast = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/10483/credits?api_key=${apiKey}&language=en-US`)
      .then((res) => {
        setAllCrew(res.data.crew.slice(0, 6));
        setAllCast(res.data.cast.sort((a, b) => b.popularity - a.popularity));
      })
      .catch((error) => console.log(error));
  };

  const getMovieRecommend = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/movie/10483/recommendations?api_key=${apiKey}&language=en-US&page=1`
      )
      .then((res) => {
        console.log(res.data.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getMovieData();
    getMovieCast();
    getMovieRecommend();
  }, []);

  console.log(allCrew);
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
                <span>{`${movieData.release_date} (${movieData.original_language})`}</span>
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
    </main>
  );
}
