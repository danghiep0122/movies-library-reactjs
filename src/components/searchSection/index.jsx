import { useState, useEffect } from 'react';
import { SearchForm } from '../../components/search';
import Image from '../../components/image';
import axios from 'axios';

import '../search/styles.scss';

export default function SearchSection({ type }) {
  const [banner, setBanner] = useState([]);
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

  useEffect(() => {
    getAllBanner();
  }, []);

  return (
    <>
      <div className="image-wrapper">{banner && <Image srcfull={banner} alt="loading ..." />}</div>
      <div className="blur-cover">
        <h2>Welcome.</h2>
        <h4>{`Millions of ${type} to discover. Explore now`}</h4>
        <SearchForm type={type} />
      </div>
    </>
  );
}
