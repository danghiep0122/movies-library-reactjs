import Pie from './PieChart';
import './styles.scss';

export default function MovieDetail() {
  return (
    <main>
      <section>
        <div>Some feature</div>
      </section>
      <section className="movie-details">
        <div className="cover-image">
          <div className="wrapper">
            <div className="movie-poster-wrapper">
              <img
                src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg"
                alt="movie-poster-wrapper"
              />
            </div>
            <div className="movie-detail">
              <div className="title-gerne">
                <h2>The Last of Us (2023)</h2>
                <h3>
                  <span>TV-MA</span>
                  Drama, Action & Adventure 🍥 59m
                </h3>
              </div>
              <div className="score-trailer">
                <div className="score-area">
                  <p className="score-point">
                    <Pie percentage={88} />
                  </p>
                  <span>
                    User <br /> Score
                  </span>
                </div>
                <div className="trailer">
                  <a href="#">
                    <span>▶</span>
                    <p>Play Trailer</p>
                  </a>
                </div>
              </div>
              <div className="pie-chart"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
