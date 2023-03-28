import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TvSeasonItem from '../../components/tvSeasonItem';
import './styles.scss';

export default function SeasonPage() {
  const [seasonsDetails, setSeasonsDetails] = useState([]);
  const [allSeasons, setAllSeasons] = useState([]);

  const { tvId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const apiKey = process.env.REACT_APP_API_KEY;
  const urlImgFullsize = process.env.REACT_APP_IMAGE_ORIGINAL_URL;
  const urlImg = process.env.REACT_APP_IMAGE_URL;
  const url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${apiKey}&language=en-US`;

  const getSeasonsDetails = async () => {
    await axios
      .get(url)
      .then((res) => {
        setSeasonsDetails(res.data);
        setAllSeasons(res.data.seasons);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getSeasonsDetails();
  }, []);

  console.log(allSeasons);

  return (
    <main>
      <section className="seasons-overview">
        <div className="background-image">
          <div className="background-image-under">
            <img src={urlImgFullsize + seasonsDetails.backdrop_path} alt="" />
          </div>
          <div className="image-cover-blur" />
        </div>
        <div className="content-seasons">
          <div className="seasons-title">
            <div className="seasons-image-wrapper">
              <img src={urlImg + seasonsDetails.poster_path} alt={seasonsDetails.name} />
            </div>
            <div className="seasons-overview-content">
              <div>
                <h1>{seasonsDetails.name}</h1>
                {seasonsDetails.original_name !== seasonsDetails.name && (
                  <h2>({seasonsDetails.original_name})</h2>
                )}
              </div>
              <div>
                <h3>First Air Date: {seasonsDetails.first_air_date}</h3>
                <h3>Status: {seasonsDetails.status}</h3>
                <p>{seasonsDetails.overview}</p>
              </div>

              <div>
                <span onClick={goBack}>🡰 Back to Detail Page</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="season-items-wrapper">
        {allSeasons.map(
          ({ id, air_date, episode_count, name, poster_path, season_number, overview }) => (
            <div key={id} className="season-item">
              <TvSeasonItem
                original_name={seasonsDetails.name}
                air_date={air_date}
                episode_count={episode_count}
                name={name}
                poster_path={urlImg + poster_path}
                season_number={season_number}
                overview={overview}
              />
            </div>
          )
        )}
      </section>
    </main>
  );
}
