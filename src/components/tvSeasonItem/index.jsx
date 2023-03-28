import './styles.scss';

export default function TvSeasonItem({
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
      <div className="poster-wrapper">
        <img src={poster_path} alt="" />
      </div>
      <div className="season-content">
        <h1>
          {name} | {episode_count} Episodes
        </h1>
        <h2>
          Season {season_number} of {original_name} premiered on {air_date}
        </h2>
        <p>{overview}</p>
      </div>
    </main>
  );
}
