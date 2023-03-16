import { useNavigate, useParams } from 'react-router-dom';
import './styles.scss';

export default function SeasonPage() {
  const { tvId } = useParams();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <div>{tvId}</div>
      <button onClick={goBack}>back to Detail Page</button>
    </main>
  );
}
