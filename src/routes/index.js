import { Route, Routes } from 'react-router-dom';

import Layout from '../layout';
import HomePage from '../pages/homePage';
import TopTrending from '../pages/topTrending';
import ErrorPage from '../pages/error404';
import MovieDetail from '../pages/movieDetails';
import TvShow from '../pages/tvShow';
import Persons from '../pages/persons';
import Person from '../pages/personDetails';
import TopRatedLayOut from '../pages/topRated';

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/toptrending" element={<TopTrending />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route
            path="/movie/toprated"
            element={<TopRatedLayOut pageTitle="Top Rated Movie" type="movie" />}
          />
          <Route
            path="/movie/trending"
            element={<TopTrending pageTitle="Top Rated Movie" type="movie" />}
          />
          <Route path="/tv" element={<TvShow />} />

          {/* change to TVShowDetail */}

          <Route path="/tv/:tvId" element={<MovieDetail />} />
          <Route
            path="/tv/topRated"
            element={<TopRatedLayOut pageTitle="Top Rated TV Show" type="tv" />}
          />
          <Route
            path="/tv/popular"
            element={<TopTrending pageTitle="Popular TV Show" type="tv" />}
          />
          <Route path="/person" element={<Persons />} />
          <Route path="/person/:personId" element={<Person />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
}
