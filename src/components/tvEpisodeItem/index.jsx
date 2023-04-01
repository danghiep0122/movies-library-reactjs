import Image from '../image';
import './styles.scss';

export default function EpisodeItem({ backgroundPath, name, vote, airDate, overview }) {
  return (
    <main className="episode-wrapper">
      <div className="episode-poster-wrapper">
        <Image src={backgroundPath} alt={name} />
      </div>
      <div className="episode-details">
        <div className="episode-title">
          <h2>{name}</h2>
          <h4>{parseFloat(vote.toFixed(1))} ★</h4>
        </div>
        <div className="episode-detail">
          <h3>{airDate}</h3>
          <p>{overview}</p>
        </div>
      </div>
    </main>
  );
}
