import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';
import Image from '../../components/image';
import SearchSection from '../../components/searchSection';
import Pagination from '../../components/Pagination';

export default function Persons() {
  const [allPeople, setAllPeople] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [allPages, setAllPages] = useState(0);

  const personUrl = process.env.REACT_APP_PERSON_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const getAllPopularPeople = async () => {
    await axios
      .get(`${personUrl}/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`)
      .then((res) => {
        setAllPeople(res.data.results);
        setAllPages(res.data.total_pages);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllPopularPeople();
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [pageNo]);

  return (
    <main className="people-page">
      <div className="inner-content">
        <section className="search-with-background-section">
          <SearchSection type="person" />
        </section>
        <section className="page-title">
          <h2>Popular People</h2>
        </section>
        <section className="all-people">
          {allPeople.map((people) => (
            <div key={people.id} className="people-item">
              <Link to={`/person/${people.id}`}>
                <div className="people-img">
                  <Image src={people.profile_path} type="people" alt="profile Name" />
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
          <Pagination totalPages={allPages} setPageNo={setPageNo} />
        </section>
      </div>
    </main>
  );
}
