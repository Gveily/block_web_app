import { FC } from "react";
import './item.styles.css';
import { Button } from "@mui/material";

export interface ItemProps {
  name: string,
  price: string,
  weight: string,
  addItem: () => void
}

export const Item: FC<ItemProps> = (
  {
    weight,
    name,
    price,
    addItem,
  }
) => {
  return (
    <div className='item'>
      <div className='item-description'>
        <div className='item-name'>{ name }</div>
        <div className='item-weight'>Количество: { weight }</div>
        <div className='item-price'>Цена: { price } zł</div>
      </div>
      <Button onClick={ addItem } variant='contained'>Buy</Button>
    </div>
  )
}