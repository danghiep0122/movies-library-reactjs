import ToPercentage from '../../util/ToPercent';
import './styles.scss';

export default function CreditRecommend({ name, score, imgUrl, release }) {
  return (
    <div className="credit-recommend-wrapper">
      <div className="credit-img">
        <img src={`https://image.tmdb.org/t/p/w500/${imgUrl}`} alt={name} />
        <div className="date-release">
          📅
          {release}
        </div>
      </div>
      <div className="credit-details">
        <h3>{name}</h3>
        <p>
          <ToPercentage>{score}</ToPercentage>%
        </p>
      </div>
    </div>
  );
}
