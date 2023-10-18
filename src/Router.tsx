import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ArticleList from './organisms/content/ArticleList';
import HomeScrap from './pages/HomeScrap';

const createRoute = (path: string) => ({
  path,
  element: <HomeScrap />,
  errorElement: <NotFound />,
  children: [{ index: true, element: <ArticleList /> }],
});

const router = createBrowserRouter([createRoute('/'), createRoute('/scrap')]);

export default router;
