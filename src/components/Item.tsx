import { FC } from "react";
import './item.styles.css';

export interface ItemProps {
  name: string,
  img: string,
  price: string,
  weight: string,
}

export const Item: FC<ItemProps> = (
  {
    weight,
    name,
    img,
    price
  }
) => {
  return (<div className='item'>
    <img src={img} alt="img" className='item-img'/>
    <div className='item-name'>{name}</div>
    <div className='item-weight'>{weight}</div>
    <div className='item-price'>{price}</div>
    <button onClick={() => {console.log(name)}}>Buy</button>
  </div>)
}