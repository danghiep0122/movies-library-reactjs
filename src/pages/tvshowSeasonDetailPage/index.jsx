import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Image from '../../components/image';
import EpisodeItem from '../../components/tvEpisodeItem';
import './styles.scss';
import { useTranslation } from 'react-i18next';

export default function SeasonDetailPage() {
  const [seasonData, setSeasonData] = useState([]);
  const [episodesData, setEpisodesData] = useState([]);
  const { tvId, season } = useParams();

  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/tv/${tvId}/season/${season}?api_key=${apiKey}&language=en-US`;

  const getSeasonData = async () => {
    await axios
      .get(url)
      .then((res) => {
        setSeasonData(res.data);
        setEpisodesData(res.data.episodes);
      })
      .catch((error) => console.error(error));
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getSeasonData();
  }, []);

  return (
    <main>
      <section>
        <div className="background-color">
          <div className="season-item-overview">
            <div className="season-poster-wrapper">
              <Image src={seasonData.poster_path} alt={seasonData.name} />
            </div>
            <div className="season-overview-content">
              <div>
                <h1>{seasonData.name}</h1>
                <h2>{seasonData.air_date}</h2>
              </div>
              <p>{seasonData.overview}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="all-season-episodes">
        <div className="goback-function" onClick={goBack}>
          <h6>{t('go_back')}</h6>
        </div>
        <div className="all-episodes-wrapper">
          {episodesData.map(({ id, still_path, name, overview, air_date, vote_average }) => (
            <EpisodeItem
              key={id}
              backgroundPath={still_path}
              name={name}
              overview={overview}
              airDate={air_date}
              vote={vote_average}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
