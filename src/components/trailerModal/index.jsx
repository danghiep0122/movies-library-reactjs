import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.scss';
import { DeleteBtn, PlayBtnDisabledIcon } from '../../assets/img/icon/allIcon';

export default function TrailerModal({ setOnModal, creditInfo }) {
  const [movieTrailerUrl, setMovieTrailerUrl] = useState('');
  const [tvTrailerUrl, setTvTrailerUrl] = useState('');
  const apiKey = process.env.REACT_APP_API_KEY;
  const url = `https://api.themoviedb.org/3/${creditInfo.type}/${creditInfo.id}/videos?api_key=${apiKey}&language=en-US`;

  const getTrailerVideo = async () => {
    await axios
      .get(url)
      .then((res) => {
        setMovieTrailerUrl(res.data.results.find((item) => item.type === 'Trailer'));
        setTvTrailerUrl(res.data.results.find((item) => item.site === 'YouTube'));
      })
      .catch((error) => console.error(error));
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
            <h4>Close</h4>
            <DeleteBtn height="2rem" width="2rem" fill="var(--white-color)" />
          </button>
          <div className="trailer-video">
            {creditInfo.type === 'movie' ? (
              typeof movieTrailerUrl === 'undefined' ? (
                <div className="no-trailer-video">
                  <PlayBtnDisabledIcon height="5rem" width="5rem" fill="var(--white-color)" />
                  <h2>Video not found | 404</h2>
                </div>
              ) : (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${movieTrailerUrl.key}`}
                ></iframe>
              )
            ) : typeof tvTrailerUrl === 'undefined' ? (
              <div className="no-trailer-video">
                <PlayBtnDisabledIcon height="5rem" width="5rem" fill="var(--white-color)" />
                <h2>Video not found | 404</h2>
              </div>
            ) : (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${tvTrailerUrl.key}`}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
