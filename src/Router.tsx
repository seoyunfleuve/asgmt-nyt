import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';

import ArticleFilter from './pages/ArticleFilter';
import App from './App';
import HomeScrap from './pages/HomeScrap';

const createRoute = (path: string) => ({
  path,
  element: <App />,
  errorElement: <NotFound />,
  children: [
    { index: true, element: <HomeScrap /> },
    { path: 'filter', element: <ArticleFilter /> },
  ],
});

const router = createBrowserRouter([createRoute('/'), createRoute('/scrap')]);

export default router;
