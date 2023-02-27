import { Route, Routes } from 'react-router-dom';

import NavBar from './components/navbar';
import HomePage from './pages/homePage';
import TopTrending from './pages/topTrending';

import './App.scss';

function App() {
  return (
    <main className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}>
          Home
        </Route>
        <Route path="/toptrending" element={<TopTrending />}>
          Home
        </Route>
      </Routes>
    </main>
  );
}

export default App;
