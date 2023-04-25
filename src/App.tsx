import React from 'react';
import './App.css';
import { Item, ItemProps } from "./components/Item";
import img from './assets/amphetamines-drugs.jpg';

function App() {
  const items: ItemProps[] = [
    {
      weight: '1г',
      price: '50zl',
      name: 'Амфетамин',
      img,
    },
    {
      weight: '2г',
      price: '90zl',
      name: 'Амфетамин',
      img,
    },
    {
      weight: '3г',
      price: '140zl',
      name: 'Амфетамин',
      img,
    },
    {
      weight: '4г',
      price: '180zl',
      name: 'Амфетамин',
      img,
    },
  ];

  return (
    <div className='items-container'>
      { items.map(el => <Item { ...el } />) }
    </div>
  )
}

export default App;
