import React, { FC } from 'react';
import './App.css';

interface AppProps {
  children: string | JSX.Element | JSX.Element[];
}

const App: FC<AppProps> = ({ children }) => {
  return (
    <>{ children }</>
  )
}

export default App;
