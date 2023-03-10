// import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import PageList from '../../util/PageList';
import SearchForm from '../../components/search';

export default function Persons() {
  const [allPeople, setAllPeople] = useState([]);
  const [banner, setBanner] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const list = PageList(15);

  const personUrl = process.env.REACT_APP_PERSON_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const getAllBanner = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then((response) => {
        const listBanner = [];
        response.data.results.map((item) => listBanner.push(item.backdrop_path));
        setBanner(listBanner[Math.floor(Math.random() * 20)]);
      })
      .catch((error) => console.log(error));
  };

  const getAllPopularPeople = async () => {
    await axios
      .get(`${personUrl}/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`)
      .then((res) => setAllPeople(res.data.results))
      .catch((error) => console.log(error));
  };

  const handleClick = (page) => {
    setPageNo(page);
  };

  useEffect(() => {
    getAllBanner();
    getAllPopularPeople();
  }, [pageNo]);

  console.log(banner);

  return (
    <main className="people-page">
      <div className="inner-content">
        <section className="search-people-section">
          <div className="image-wrapper">
            <img src={`https://image.tmdb.org/t/p/original${banner}`} alt="loading ..." />
          </div>
          <div className="blur-cover">
            <h2>Welcome.</h2>
            <h4>Millions of People to discover. Explore now</h4>
            <SearchForm />
          </div>
        </section>
        <section className="page-title">
          <h2>Popular People</h2>
        </section>
        <section className="all-people">
          {allPeople.map((people) => (
            <div key={people.id} className="people-item">
              <Link to={`/person/${people.id}`}>
                <div className="people-img">
                  <img
                    src={
                      people.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${people.profile_path}`
                        : 'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
                    }
                    alt="profile Name"
                  />
                </div>
                <div className="people-detail">
                  <h3>{people.name}</h3>
                  <p>{allPeople !== [] ? people.known_for_department : 'Loading ...'}</p>
                </div>
              </Link>
            </div>
          ))}
        </section>
        <section className="navigator-page">
          <div>
            {list.map((page) => (
              <button onClick={() => handleClick(page)} key={page}>
                {page}
              </button>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
