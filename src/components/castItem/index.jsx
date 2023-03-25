import { FemaleIcon, MaleIcon } from '../../assets/img/icon/allIcon';
import Image from '../image';
import './styles.scss';

export default function CastItem({ name, character, imgUrl, gender }) {
  return (
    <div className="cast-item">
      <div className="cast-img">
        {imgUrl ? (
          <Image src={imgUrl} alt={name} />
        ) : gender === 2 ? (
          <div>
            <MaleIcon height="100" width="100" fill="var(--blue-color)" />
          </div>
        ) : (
          <div>
            <FemaleIcon height="100" width="100" fill="var(--pink-color)" />
          </div>
        )}
      </div>
      <div className="cast-info">
        <h3>{name}</h3>
        <h4>{character}</h4>
      </div>
    </div>
  );
}
