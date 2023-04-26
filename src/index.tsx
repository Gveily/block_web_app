import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AreaPage from "./pages/Area";
import CityPage from "./pages/Cities";
import ProductsPage from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/cities/:id",
    element: <CityPage/>,
  },
  {
    path: '/area/:id',
    element: <AreaPage />,
  },
  {
    path: "/products",
    element: <ProductsPage/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App>
    <RouterProvider router={router} />
  </App>
);
