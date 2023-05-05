import React, { FC } from 'react';
import './App.css';
import { NavToCartButton, NavToCartContainer } from "./pages/AreaDetails/areaDetails.styled";
import { useAppSelector } from "./store/store";
import { ProductsSelector } from "./store/slices/products";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "./hooks/useTelegram";

interface AppProps {
  children: string | JSX.Element | JSX.Element[];
}

const App: FC<AppProps> = ({ children }) => {
  const { tg } = useTelegram();

  tg.expand();

  return (
    <>{ children }</>
  )
}

export default App;
