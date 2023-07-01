import './styles.scss';
import { DeleteBtn } from '../../assets/img/icon/allIcon';
import { useTranslation } from 'react-i18next';

export default function TrailerYoutube({ setOnModal, videoUrl }) {
  const { t } = useTranslation();

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
            <h4>{t('close')}</h4>
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
