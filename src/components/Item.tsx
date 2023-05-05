import { FC, useState } from "react";
import {
  AmountContainer,
  ItemAmountDot,
  ItemAvailableAmount,
  ItemContainer, ItemCount, ItemCounterContainer, IncrementDecrementButton, ItemImage,
  ItemName,
  ItemPrice,
  ItemWeight
} from "./item.styled";
import { Button } from "@mui/material";
import { defaultTheme } from "../theme";
import { useDispatch } from "react-redux";
import { AddedProductInterface, addProduct, removeProduct } from "../store/slices/products";

export interface ItemProps {
  name: string,
  price: string,
  weight: string,
  amount: number,
  img: string,
  baseProductId: number,
  areaId: number,
  areaName: string,
}

export const Item: FC<ItemProps> = (
  {
    weight,
    name,
    price,
    amount,
    img,
    baseProductId,
    areaId,
    areaName
  }
) => {
  const [amountToBuy, setAmountToBuy] = useState<number>(0);
  const dispatch = useDispatch();
  const addedProduct: AddedProductInterface = {
    baseProductId,
    amountToBuy,
    areaName,
    areaId
  }

  const handleIncrement = async () => {
    await setAmountToBuy((prevState) => {
      const result = prevState + 1;
      addedProduct.amountToBuy = result;

      dispatch(addProduct(addedProduct))

      return result;
    });
  }

  const handleDecrement = async () => {
    await setAmountToBuy(prevState => {
      const result = prevState - 1;
      addedProduct.amountToBuy = result;

      dispatch(removeProduct(addedProduct));

      return result;
    });
  }

  return (
    <ItemContainer>
      <ItemImage src={ img } alt="product photo"/>
      <ItemPrice>{ price } zł</ItemPrice>
      <ItemName>{ name }</ItemName>
      <AmountContainer>
        <ItemWeight>
          { weight }
        </ItemWeight>
        <ItemAmountDot/>
        <ItemAvailableAmount>
          { amount } шт
        </ItemAvailableAmount>
      </AmountContainer>
      { amountToBuy !== 0 && <ItemCounterContainer>
        <IncrementDecrementButton onClick={ handleDecrement }>
          -
        </IncrementDecrementButton>
        <ItemCount>
          { amountToBuy }
        </ItemCount>
        <IncrementDecrementButton
          onClick={ handleIncrement }
          disabled={ amountToBuy === amount }
        >
          +
        </IncrementDecrementButton>
      </ItemCounterContainer> }

      { amountToBuy === 0 && <Button
        variant='outlined'
        sx={ {
          backgroundColor: defaultTheme.colors.red,
          color: defaultTheme.colors.white,
          padding: '4px 0',
          border: 'none',
          borderRadius: '16px',
          textTransform: 'capitalize',
          width: '98px',
          marginTop: '8px',
          fontFamily: 'Inter',
          fontWeight: 500,
          fontSize: '12px',
          lineHeight: '15px',
        } }
        onClick={ handleIncrement }
      >
        Добавить
      </Button> }
    </ItemContainer>
  )
}