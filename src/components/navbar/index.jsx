import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <ul>
      <li>
        <Link to={'/'}>Home</Link>
        <Link to={'/toptrending'}>Top Trending</Link>
      </li>
    </ul>
  );
}
