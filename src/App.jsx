import { Route, Routes } from 'react-router-dom';

import Layout from './layout';
import HomePage from './pages/homePage';
import TopTrending from './pages/topTrending';
import ErrorPage from './pages/error404';
import MovieDetail from './pages/movie';
import TvShow from './pages/tvShow';

function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/toptrending" element={<TopTrending />} />
          <Route path="/toptrending/:id" element={<MovieDetail />} />
          <Route path="/tvshow" element={<TvShow />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
