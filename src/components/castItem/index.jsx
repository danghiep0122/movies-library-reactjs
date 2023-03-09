import './styles.scss';

export default function CastItem({ name, character, imgUrl }) {
  return (
    <div className="cast-item">
      <div className="cast-img">
        <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt={name} />
      </div>
      <div className="cast-info">
        <h3>{name}</h3>
        <h4>{character}</h4>
      </div>
    </div>
  );
}
