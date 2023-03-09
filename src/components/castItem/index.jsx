import { FemaleIcon, MaleIcon } from '../../assets/img/icon/allIcon';
import './styles.scss';

export default function CastItem({ name, character, imgUrl, gender }) {
  return (
    <div className="cast-item">
      <div className="cast-img">
        {imgUrl ? (
          <img src={`https://image.tmdb.org/t/p/w500${imgUrl}`} alt={name} />
        ) : gender === 2 ? (
          <div>
            <MaleIcon height="100" width="100" fill="black" />
          </div>
        ) : (
          <div>
            <FemaleIcon height="100" width="100" fill="black" />
          </div>
        )}
      </div>
      <div className="cast-info">
        <h3>{name}</h3>
        <h4>{character}</h4>
        <h4>{gender}</h4>
      </div>
    </div>
  );
}
