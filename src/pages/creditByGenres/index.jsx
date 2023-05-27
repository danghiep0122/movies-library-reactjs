import './styles.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ButtonGenres from '../../components/buttonGenres';
import CreditItem from '../../components/creditItem';
import { Link } from 'react-router-dom';

export default function CreditByGenres({ type }) {
  const [allGenres, setAllGenres] = useState([]);
  const [listActive, setListActive] = useState([]);
  const [allMovies, setAllMovies] = useState([]);

  const ApiKey = process.env.REACT_APP_API_KEY;
  const urlGenres = `https://api.themoviedb.org/3/genre/${type}/list?api_key=${ApiKey}&language=en-US`;
  const urlAllMovie = `https://api.themoviedb.org/3/${type}/popular?api_key=${ApiKey}&language=en-US&page=1`;

  const getGenresList = async () => {
    await axios
      .get(urlGenres)
      .then((res) => setAllGenres(res.data.genres))
      .catch((error) => console.error(error));
  };

  const getAllMovie = async () => {
    await axios
      .get(urlAllMovie)
      .then((res) => {
        setAllMovies(res.data.results);
      })
      .catch((error) => console.error(error));
  };

  const filterMovie = () => {
    if (listActive.length === 0) {
      getAllMovie();
    } else {
      for (let id of listActive) {
        setAllMovies((allMovies) =>
          allMovies.filter((item) => {
            return item.genre_ids.includes(id);
          })
        );
      }
    }
  };

  useEffect(() => {
    getGenresList();
    getAllMovie();
  }, [type]);

  useEffect(() => {
    filterMovie();
  }, [listActive.length]);

  return (
    <main>
      <div className="page-wrapper">
        <div className="selector-navigator">
          <div className="all-genres-list">
            {allGenres.map(({ id, name }) => (
              <ButtonGenres
                setAllMovies={setAllMovies}
                setListActive={setListActive}
                id={id}
                name={name}
                key={id}
              />
            ))}
          </div>
          <div className="all-country-list">
            {listActive.map((item) => (
              <h1 key={item}>{item}</h1>
            ))}
            <button
              onClick={() => {
                setListActive([]);
                window.location.reload(false);
              }}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="all-movie-results">
          {allMovies.map((item) => (
            <Link key={item.id} to={`./${item.id}`}>
              <CreditItem
                title={item.title || item.name}
                imgUrl={item.poster_path}
                vote={item.vote_average * 10}
              />
            </Link>
          ))}
          {allMovies.length === 0 && <div>{`No ${type} match your search`}</div>}
        </div>
      </div>
    </main>
  );
}
