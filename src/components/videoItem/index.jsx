import { useState } from 'react';

import { PlayButtonIcon } from '../../assets/img/icon/allIcon';
import './styles.scss';
import TrailerYoutube from '../../components/trailerModal/trailerYoutube';

export default function VideoItem({ videoUrl, name }) {
  const [onModal, setOnModal] = useState(false);
  return (
    <main>
      <div className="video-item-wrapper">
        <div className="video-img-wrapper">
          <img src={`https://i.ytimg.com/vi/${videoUrl}/maxresdefault.jpg`} />
          <div onClick={() => setOnModal(true)} className="play-btn-icon">
            <PlayButtonIcon fill="var(--red-color)" />
          </div>
        </div>
        <div className="video-details">
          <h3>{name}</h3>
        </div>
      </div>
      {onModal && <TrailerYoutube setOnModal={setOnModal} videoUrl={videoUrl} />}
    </main>
  );
}
