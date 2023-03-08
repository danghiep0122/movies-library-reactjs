import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { DeleteBtn, FemaleIcon, MaleIcon } from '../../assets/img/icon/allIcon';
import useDebounce from '../../hooks/useDebounce';
import './styles.scss';
import { QuestionMarkIcon } from '../../assets/img/icon/allIcon';

const SearchForm = () => {
  const [allResult, setAllResult] = useState([]);
  const [input, setInput] = useState('');

  const keyWord = useDebounce(input, 800);

  const getResults = async () => {
    await axios
      .get(
        `https://api.themoviedb.org/3/search/person?api_key=2feceab83c679d844299e10bff5e391c&language=en-US&query=${keyWord}&page=1&include_adult=false`
      )
      .then((response) => {
        const sortedArr = response.data.results.sort((a, b) => b.popularity - a.popularity);
        setAllResult(sortedArr);
      })
      .catch((error) => console.log(error));
  };

  const handleOffModal = () => {
    setAllResult([]);
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
        <div className={allResult.length === 0 ? 'disappear' : 'modal'} onClick={handleOffModal} />
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
              <DeleteBtn height="1.6rem" width="1.6rem" fill="#30475E" />
            </div>
            <button>Search</button>
          </div>
        </form>
      </section>
      <section className="people-result">
        <div className={allResult.length === 0 ? 'disappear' : 'result-section'}>
          <ul className="result-list">
            {allResult.map((people) => (
              <Link to={`./${people.id}`} key={people.id}>
                <li className="result-item">
                  <div className="people-avatar">
                    {people.profile_path ? (
                      <img src={`https://image.tmdb.org/t/p/w500/${people.profile_path}`} alt="" />
                    ) : (
                      <QuestionMarkIcon height="40" width="40" fill="#333" />
                    )}
                  </div>
                  <h3>{people.name}</h3>
                  <div className="people-gender">
                    {people.gender === 2 ? (
                      <MaleIcon width="1rem" height="1rem" fill="blue" />
                    ) : (
                      <FemaleIcon width="1rem" height="1rem" fill="#ff748c" />
                    )}
                  </div>
                  <p>{people.known_for_department}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default SearchForm;
