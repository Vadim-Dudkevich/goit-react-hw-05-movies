import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
