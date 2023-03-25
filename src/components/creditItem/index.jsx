import Pie from '../pieChart/PieChart';
import Image from '../image';
import './styles.scss';

export default function CreditItem({ title, imgUrl, dayRelease, vote }) {
  return (
    <div className="content-wrapper">
      <section className="image">
        <div className="img-wrapper">
          <Image src={imgUrl} alt={title} />
        </div>
      </section>
      <section className="user-rating">
        <Pie size={20} percentage={vote} />
      </section>
      <section className="item-info">
        <h3>{title}</h3>
        <p>{dayRelease}</p>
      </section>
    </div>
  );
}
