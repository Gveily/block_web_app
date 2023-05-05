import { FC, useState } from "react";
import { AddedProductInterface, addProduct, removeProduct } from "../../store/slices/products";
import {
  CartItemAction,
  CartItemActions,
  CartItemContainer, CartItemCounter,
  CartItemDescription, CartItemImage,
  CartItemName,
  CartItemPrice,
  CartItemWeightAndArea
} from "./cart-item.styled";
import { useDispatch } from "react-redux";

export const CartItem: FC<AddedProductInterface> = (
  {
    weight,
    areaId,
    areaName,
    img,
    baseProductId,
    amountToBuy,
    price,
    name,
    amount
  }
) => {
  const [counter, setCounter] = useState<number>(amountToBuy);
  const dispatch = useDispatch();
  const addedProduct: AddedProductInterface = {
    baseProductId,
    amountToBuy,
    areaName,
    areaId,
    img,
    weight,
    price,
    name,
    amount
  }

  const handleIncrement = async () => {
    await setCounter((prevState) => {
      const result = prevState + 1;
      addedProduct.amountToBuy = result;

      dispatch(addProduct(addedProduct))

      return result;
    });
  }

  const handleDecrement = async () => {
    await setCounter(prevState => {
      const result = prevState - 1;
      addedProduct.amountToBuy = result;

      dispatch(removeProduct(addedProduct));

      return result;
    });
  }

  return (
    <CartItemContainer>
      <CartItemImage src={img} alt='product-photo' />
      <CartItemDescription>
        <CartItemName>
          {name}
        </CartItemName>
        <CartItemPrice>
          {+price * counter} zł
        </CartItemPrice>
        <CartItemWeightAndArea>
          {weight} {areaName}
        </CartItemWeightAndArea>
      </CartItemDescription>
      <CartItemActions>
        <CartItemAction onClick={handleDecrement}>
          -
        </CartItemAction>
        <CartItemCounter>
          {counter}
        </CartItemCounter>
        <CartItemAction onClick={handleIncrement}>
          +
        </CartItemAction>
      </CartItemActions>
    </CartItemContainer>
  )
}