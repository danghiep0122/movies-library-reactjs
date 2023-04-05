import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  DeleteBtn,
  FemaleIcon,
  MaleIcon,
  MovieIcon,
  TVShowIcon,
  UserIcon,
  SearchFailedIcon
} from '../../assets/img/icon/allIcon';
import useDebounce from '../../hooks/useDebounce';
import './styles.scss';
import { QuestionMarkIcon } from '../../assets/img/icon/allIcon';
import Image from '../image';

const apiKey = process.env.REACT_APP_API_KEY;

export const MultiSearchForm = () => {
  const [allMovie, setAllMovie] = useState([]);
  const [allTvShow, setAllTvShow] = useState([]);
  const [allPerson, setAllPerson] = useState([]);
  const [input, setInput] = useState('');

  const keyWord = useDebounce(input, 800);

  const urlMulti = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${keyWord}&page=1&include_adult=false`;

  const getResults = async () => {
    await axios
      .get(urlMulti)
      .then((response) => {
        setAllMovie(
          response.data.results
            .filter((item) => item.media_type === 'movie')
            .filter((item) => item.popularity > 1)
            .sort((a, b) => b.popularity - a.popularity)
        );
        setAllTvShow(
          response.data.results
            .filter((item) => item.media_type === 'tv')
            .filter((item) => item.popularity > 1)
            .sort((a, b) => b.popularity - a.popularity)
        );
        setAllPerson(
          response.data.results
            .filter((item) => item.media_type === 'person')
            .sort((a, b) => b.popularity - a.popularity)
        );
      })
      .catch((error) => console.error(error));
  };

  const handleOffModal = () => {
    setAllMovie([]);
    setAllTvShow([]);
    setAllPerson([]);
    setInput('');
  };

  useEffect(() => {
    if (keyWord.trim() === '') {
      return;
    }
    getResults();
  }, [keyWord]);

  return (
    <main>
      <section className="search-component">
        <div
          className={
            allMovie.length === 0 &&
            allTvShow.length === 0 &&
            allPerson.length === 0 &&
            input === ''
              ? 'disappear'
              : 'modal'
          }
          onClick={handleOffModal}
        />
        <form onSubmit={(e) => e.preventDefault()} className="seach-form">
          <input
            name="text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Typing to start Searching ... "
          />
          <div className="right-component">
            <div onClick={handleOffModal} className="delete-icon">
              <p>Clear all</p>
              <DeleteBtn height="1.6rem" width="1.6rem" fill="var(--text-dark-color)" />
            </div>
          </div>
        </form>
      </section>
      <section
        className={
          allMovie.length === 0 && allTvShow.length === 0 && allPerson.length === 0 && input === ''
            ? 'disappear'
            : 'result-section'
        }
      >
        <div className="result-list">
          <div className="media-type-title-and-logo">
            <MovieIcon width="2rem" height="2rem" fill="var(--red-color)" />
            <h1 style={{ color: 'var(--red-color)' }}>Movies</h1>
          </div>
          {allMovie.length === 0 ? (
            <div className="no-result-alert">
              <SearchFailedIcon width="2rem" height="2rem" />
              No result
            </div>
          ) : (
            allMovie.map(({ id, title, release_date, original_language }) => (
              <Link to={`./movie/${id}`} key={id}>
                <div className="result-item">
                  <h3>{title}</h3>
                  <h3 style={{ textTransform: 'uppercase' }}>{`(${original_language})`}</h3>
                  <h5>{release_date}</h5>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="result-list">
          <div className="media-type-title-and-logo">
            <TVShowIcon width="2rem" height="2rem" fill="var(--blue-color)" />
            <h1 style={{ color: 'var(--blue-color)' }}>TV Show</h1>
          </div>
          {allTvShow.length === 0 ? (
            <div className="no-result-alert">
              <SearchFailedIcon width="2rem" height="2rem" />
              No result
            </div>
          ) : (
            allTvShow.map(({ id, name, first_air_date, original_language }) => (
              <Link to={`./tv/${id}`} key={id}>
                <div className="result-item">
                  <h3>{name}</h3>
                  <h3 style={{ textTransform: 'uppercase' }}>{`(${original_language})`}</h3>
                  <h5>{first_air_date}</h5>
                </div>
              </Link>
            ))
          )}
        </div>

        <div className="result-list">
          <div className="media-type-title-and-logo">
            <UserIcon width="2rem" height="2rem" fill="var(--primary-color)" />
            <h1 style={{ color: 'var(--primary-color)' }}>People</h1>
          </div>
          {allPerson.length === 0 ? (
            <div className="no-result-alert">
              <SearchFailedIcon width="2rem" height="2rem" />
              No result
            </div>
          ) : (
            allPerson.map(({ id, name, profile_path, gender, known_for_department }) => (
              <Link to={`./person/${id}`} key={id}>
                <div className="result-item">
                  <div className="people-avatar">
                    {profile_path ? (
                      <Image src={profile_path} alt={name} />
                    ) : (
                      <QuestionMarkIcon height="40" width="40" fill="#333" />
                    )}
                  </div>
                  <h3>{name}</h3>
                  <div className="people-gender">
                    {gender === 2 ? (
                      <MaleIcon width="1rem" height="1rem" fill="blue" />
                    ) : (
                      <FemaleIcon width="1rem" height="1rem" fill="#ff748c" />
                    )}
                  </div>
                  <p>{known_for_department}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export function SearchForm({ type }) {
  const [input, setInput] = useState('');
  const [allResults, setAllResults] = useState([]);

  const keyWord = useDebounce(input, 800);

  const urlResult = `https://api.themoviedb.org/3/search/${type}?api_key=${apiKey}&language=en-US&query=${keyWord}&page=1&include_adult=false`;

  const handleOffModal = () => {
    setAllResults([]);
    setInput('');
  };

  const getResults = async () => {
    await axios
      .get(urlResult)
      .then((response) => setAllResults(response.data.results))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (keyWord.trim() === '') {
      return;
    }
    getResults();
  }, [keyWord]);

  return (
    <main>
      <section className="search-component">
        <div
          className={allResults.length === 0 && input === '' ? 'disappear' : 'modal'}
          onClick={handleOffModal}
        />
        <form onSubmit={(e) => e.preventDefault()} className="seach-form">
          <input
            name="text"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Typing to start Searching ... "
          />
          <div className="right-component">
            <div onClick={handleOffModal} className="delete-icon">
              <p>Clear all</p>
              <DeleteBtn height="1.6rem" width="1.6rem" fill="var(--text-dark-color)" />
            </div>
          </div>
        </form>
      </section>
      <section className={allResults.length === 0 && input === '' ? 'disappear' : 'result-section'}>
        {type === 'movie' && (
          <div className="result-list">
            <div className="media-type-title-and-logo">
              <MovieIcon width="2rem" height="2rem" fill="var(--red-color)" />
              <h1 style={{ color: 'var(--red-color)' }}>Movies</h1>
            </div>
            {allResults.length === 0 ? (
              <div className="no-result-alert">
                <SearchFailedIcon width="2rem" height="2rem" />
                No result
              </div>
            ) : (
              allResults.map(({ id, title, release_date, original_language }) => (
                <Link to={`./movie/${id}`} key={id}>
                  <div className="result-item">
                    <h3>{title}</h3>
                    <h3 style={{ textTransform: 'uppercase' }}>{`(${original_language})`}</h3>
                    <h5>{release_date}</h5>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}

        {type === 'tv' && (
          <div className="result-list">
            <div className="media-type-title-and-logo">
              <TVShowIcon width="2rem" height="2rem" fill="var(--blue-color)" />
              <h1 style={{ color: 'var(--blue-color)' }}>TV Show</h1>
            </div>
            {allResults.length === 0 ? (
              <div className="no-result-alert">
                <SearchFailedIcon width="2rem" height="2rem" />
                No result
              </div>
            ) : (
              allResults.map(({ id, name, first_air_date, original_language }) => (
                <Link to={`./tv/${id}`} key={id}>
                  <div className="result-item">
                    <h3>{name}</h3>
                    <h3 style={{ textTransform: 'uppercase' }}>{`(${original_language})`}</h3>
                    <h5>{first_air_date}</h5>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}

        {type === 'person' && (
          <div className="result-list">
            {allResults.length === 0 ? (
              <div className="no-result-alert">
                <SearchFailedIcon width="2rem" height="2rem" />
                No result
              </div>
            ) : (
              allResults.map(({ id, name, profile_path, gender, known_for_department }) => (
                <Link to={`./person/${id}`} key={id}>
                  <div className="result-item">
                    <div className="people-avatar">
                      {profile_path ? (
                        <Image src={profile_path} alt={name} />
                      ) : (
                        <QuestionMarkIcon height="40" width="40" fill="#333" />
                      )}
                    </div>
                    <h3>{name}</h3>
                    <div className="people-gender">
                      {gender === 2 ? (
                        <MaleIcon width="1rem" height="1rem" fill="blue" />
                      ) : (
                        <FemaleIcon width="1rem" height="1rem" fill="#ff748c" />
                      )}
                    </div>
                    <p>{known_for_department}</p>
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </section>
    </main>
  );
}
