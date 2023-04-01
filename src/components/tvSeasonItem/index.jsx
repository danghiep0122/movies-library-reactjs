import { Link } from 'react-router-dom';
import Image from '../image';
import './styles.scss';

export default function TvSeasonItem({
  showId,
  air_date,
  episode_count,
  name,
  poster_path,
  season_number,
  overview,
  original_name
}) {
  return (
    <main className="seasons-item">
      <section className="season-item-overview">
        <Link to={`/tv/${showId}/seasons/${season_number}`}>
          <div className="poster-wrapper">
            {poster_path !== 'null' && <Image src={poster_path} alt={name} />}
          </div>
        </Link>
        <div className="season-content">
          <Link to={`/tv/${showId}/seasons/${season_number}`}>
            <h1>
              {name} | {episode_count} Episodes
            </h1>
          </Link>
          <h2>
            Season {season_number} of {original_name} premiered on {air_date}
          </h2>
          <p>{overview}</p>
        </div>
      </section>
    </main>
  );
}
