import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ArticleFilter from './pages/ArticleFilter';
import App from './App';
import HomeScrap from './pages/HomeScrap';
import Modal from './templates/Modal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <HomeScrap /> },
      { path: 'scrap', element: <HomeScrap /> },
    ],
  },
]);

export default router;
