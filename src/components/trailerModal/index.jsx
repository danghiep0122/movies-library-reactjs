import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.scss';

export default function TrailerModal({ setOnModal, creditInfo }) {
  const [trailerUrl, setTrailerUrl] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${creditInfo.type}/${creditInfo.id}/videos?api_key=${apiKey}&language=en-US`;

  const getTrailerVideo = async () => {
    await axios
      .get(url)
      .then((res) => setTrailerUrl(res.data.results.find((x) => x.name === 'Official Trailer')));
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
            X
          </button>
          <div className="video">
            <h3></h3>
            {trailerUrl && (
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
