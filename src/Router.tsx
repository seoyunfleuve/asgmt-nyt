import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import App from './App';
import Home from './pages/Home';
import Scrap from './pages/Scrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'scrap', element: <Scrap /> },
    ],
  },
]);

export default router;
