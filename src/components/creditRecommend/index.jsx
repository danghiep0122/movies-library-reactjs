import { PrimaryShortLogo } from '../../assets/img/icon/allIcon';
import ToPercentage from '../../util/ToPercent';
import Image from '../image';
import './styles.scss';

export default function CreditRecommend({ name, score, imgUrl, release }) {
  return (
    <div className="credit-recommend-wrapper">
      <div className="credit-img">
        {imgUrl ? (
          <Image src={imgUrl} alt={name} />
        ) : (
          <span>
            <PrimaryShortLogo />
          </span>
        )}
        <div className="date-release">
          📅
          {release}
        </div>
      </div>
      <div className="credit-item-details">
        <h3>{name}</h3>
        <p>
          <ToPercentage>{score}</ToPercentage>%
        </p>
      </div>
    </div>
  );
}
