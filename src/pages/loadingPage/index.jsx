import { LoadingSpinner } from '../../assets/animation/loadingSpinner';
import './styles.scss';

export default function LoadingPage() {
  return (
    <main className="loading-section">
      <div className="loading-content">
        <LoadingSpinner />
        <h1>Loading. Please wait ...</h1>
      </div>
    </main>
  );
}
