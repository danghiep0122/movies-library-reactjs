import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.scss';
import { DeleteBtn, PlayBtnDisabledIcon } from '../../assets/img/icon/allIcon';

export default function TrailerModal({ setOnModal, creditInfo }) {
  const [trailerUrl, setTrailerUrl] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${creditInfo.type}/${creditInfo.id}/videos?api_key=${apiKey}&language=en-US`;

  const getTrailerVideo = async () => {
    await axios.get(url).then((res) => {
      setTrailerUrl(res.data.results.find((x) => x.name === 'Official Trailer'));
    });
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);

  return (
    <main>
      <div onClick={() => setOnModal(false)} className="modal-outer" />
      <div className="modal-inner">
        <div className="trailer-wrapper">
          <button
            onClick={() => {
              setOnModal(false);
            }}
          >
            <DeleteBtn height="2rem" width="2rem" fill="var(--white-color)" />
          </button>
          <div className="trailer-video">
            {typeof trailerUrl === 'undefined' ? (
              <div className="no-trailer-video">
                <PlayBtnDisabledIcon height="5rem" width="5rem" fill="var(--white-color)" />
                <h2>Video not found | 404</h2>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${trailerUrl.key}`}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
