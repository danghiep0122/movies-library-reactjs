import { Route, Routes } from 'react-router-dom';

import Layout from '../layout';
import HomePage from '../pages/homePage';
import TopTrending from '../pages/topTrending';
import ErrorPage from '../pages/error404';
import MovieDetail from '../pages/movieDetails';
import TvDetail from '../pages/tvShowDetails';
import Persons from '../pages/persons';
import Person from '../pages/personDetails';
import TopRatedLayOut from '../pages/topRated';
import SeasonPage from '../pages/tvshowSeasonsPage';
import SeasonDetailPage from '../pages/tvshowSeasonDetailPage';
import VideosPage from '../pages/videosPage';
import CreditByGenres from '../pages/creditByGenres';

export default function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/toptrending" element={<TopTrending />} />
          <Route path="/movie" element={<CreditByGenres type="movie" />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/movie/:movieId/videos" element={<VideosPage type="movie" />} />
          <Route
            path="/movie/toprated"
            element={<TopRatedLayOut pageTitle="Top Rated Movie" type="movie" />}
          />
          <Route
            path="/movie/trending"
            element={<TopTrending pageTitle="Top Rated Movie" type="movie" />}
          />

          {/* change to TVShowDetail */}
          <Route path="/tv" element={<CreditByGenres type="tv" />} />
          <Route path="/tv/:tvId" element={<TvDetail />} />
          <Route path="/tv/:tvId/videos" element={<VideosPage type="tv" />} />
          <Route path="/tv/:tvId/seasons" element={<SeasonPage />} />
          <Route path="/tv/:tvId/seasons/:season" element={<SeasonDetailPage />} />
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
