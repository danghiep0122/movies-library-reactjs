import { PrimaryFullIcon, UserIcon } from '../../assets/img/icon/allIcon';
import './styles.scss';

export default function Image({ src, alt = 'image custom', type, srcfull }) {
  return (
    <div className="full-image">
      {src || srcfull ? (
        <img
          src={
            !srcfull
              ? `https://image.tmdb.org/t/p/w500${src}`
              : `https://image.tmdb.org/t/p/original${srcfull}`
          }
          alt={alt}
        />
      ) : type === 'people' ? (
        <UserIcon width="100%" height="100%" />
      ) : (
        <PrimaryFullIcon width="100%" height="100%" />
      )}
    </div>
  );
}
