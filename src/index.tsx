import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import AreaPage from "./pages/AreaDetails";
import CityPage from "./pages/CityDetails";
import CartPage from "./pages/Cart";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { Provider } from 'react-redux';
import { store } from "./store/store";

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
    element: <AreaPage/>,
  },
  {
    path: "/cart",
    element: <CartPage/>,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={ defaultTheme }>
    <Provider store={ store }>
      <App>
        <RouterProvider router={ router }/>
      </App>
    </Provider>
  </ThemeProvider>
);
