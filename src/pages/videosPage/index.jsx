import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './styles.scss';
import Image from '../../components/image';
import VideoDetailItem from '../../components/videoDetailItem';
import { useTranslation } from 'react-i18next';

export default function VideosPage({ type }) {
  const [allVieos, setAllVideos] = useState([]);
  const [creditDetails, setCreditDetails] = useState([]);
  const { movieId, tvId } = useParams();

  const goBack = useNavigate();
  const { t } = useTranslation();

  const apiKey = process.env.REACT_APP_API_KEY;

  const videosUrl = `https://api.themoviedb.org/3/${type}/${
    type === 'movie' ? movieId : tvId
  }/videos?api_key=${apiKey}&language=en-US`;

  const detailsUrl = `https://api.themoviedb.org/3/${type}/${
    type === 'movie' ? movieId : tvId
  }?api_key=${apiKey}&language=en-US`;

  const getVideos = async () => {
    await axios
      .get(videosUrl)
      .then((res) => setAllVideos(res.data.results))
      .catch((error) => console.error(error));
  };

  const getDetails = async () => {
    await axios
      .get(detailsUrl)
      .then((res) => setCreditDetails(res.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getVideos();
    getDetails();
  }, []);

  return (
    <main>
      <section className="seasons-overview">
        <div className="background-image">
          <div className="background-image-under">
            <Image srcfull={creditDetails.backdrop_path} alt={creditDetails.name} />
          </div>
          <div className="image-cover-blur" />
        </div>
        <div className="content-seasons">
          <div className="seasons-title">
            <div className="seasons-image-wrapper">
              <Image src={creditDetails.poster_path} alt={creditDetails.name} />
            </div>
            <div className="seasons-overview-content">
              <div>
                <h1>{creditDetails.name || creditDetails.title}</h1>
                {creditDetails.original_name !== creditDetails.name && (
                  <h2>({creditDetails.original_name})</h2>
                )}
              </div>
              <div>
                {type === 'tv' ? (
                  <h3>
                    {t('first_air')}: {creditDetails.first_air_date}
                  </h3>
                ) : (
                  <h3>
                    {t('release_date')}: {creditDetails.release_date}
                  </h3>
                )}
                <h3>
                  {t('status')}: {creditDetails.status}
                </h3>
                <p>{creditDetails.overview}</p>
              </div>

              <div>
                <span onClick={() => goBack(-1)}>{t('back_to_detail')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="all-videos-item">
          {allVieos.map(({ id, name, key, type, published_at }) => (
            <VideoDetailItem
              key={id}
              videoName={name}
              videoUrl={key}
              type={type}
              date={published_at}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
