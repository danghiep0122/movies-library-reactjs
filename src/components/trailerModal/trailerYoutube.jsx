import './styles.scss';
import { DeleteBtn } from '../../assets/img/icon/allIcon';

export default function TrailerYoutube({ setOnModal, videoUrl }) {
  return (
    <main>
      <div onClick={() => setOnModal(false)} className="modal-outer" />
      <div className="modal-inner">
        <div className="trailer-wrapper">
          <button
            onClick={() => {
              setOnModal(false);
            }}
          >
            <h4>Close</h4>
            <DeleteBtn height="2rem" width="2rem" fill="var(--white-color)" />
          </button>
          <div className="trailer-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${videoUrl}`}
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
