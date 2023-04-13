import { useState } from 'react';

import { PlayButtonIcon } from '../../assets/img/icon/allIcon';
import './styles.scss';
import TrailerYoutube from '../../components/trailerModal/trailerYoutube';

export default function VideoItem({ videoUrl }) {
  const [onModal, setOnModal] = useState(false);
  return (
    <main>
      <div className="video-item-wrapper">
        <div onClick={() => setOnModal(true)} className="video-img-wrapper">
          <img src={`https://img.youtube.com/vi/${videoUrl}/hqdefault.jpg`} />
          <div className="play-btn-icon">
            <PlayButtonIcon fill="var(--red-color)" />
          </div>
        </div>
      </div>
      {onModal && <TrailerYoutube setOnModal={setOnModal} videoUrl={videoUrl} />}
    </main>
  );
}
