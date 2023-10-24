import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import App from './App';
import HomeScrap from './pages/HomeScrap';

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
