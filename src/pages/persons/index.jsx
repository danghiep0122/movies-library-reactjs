import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Persons() {
  const [idInput, setIdInput] = useState('');
  return (
    <Link to={`/person/${idInput}`}>
      <input onChange={(e) => setIdInput(e.target.value)} type="number" placeholder="ID Here" />
      Person {idInput}
    </Link>
  );
}
