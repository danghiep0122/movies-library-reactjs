import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';

export default function Layout() {
  return (
    <>
      <NavBar />

      <Outlet />
    </>
  );
}
