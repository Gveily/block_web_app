import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import { titleStyles } from "../Home";
import React, { useEffect, useState } from "react";
import { AreaDetailsContainer, NavToCartButton, NavToCartContainer } from "../AreaDetails/areaDetails.styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";
import { CartItem } from "./cart-item";
import { LoadingComponent } from "../../components/loadingComponent";

const CartPage = () => {
  const navigate = useNavigate();
  const { addedProducts } = useAppSelector(ProductsSelector);
  const [areaId, setAreaId] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const makeOrder = () => {
    setIsLoading(true);
    // const resp = axios.post()
  }

  useEffect(() => {
    if (!addedProducts.length) {
      navigate(`/area/${areaId}`);
    }

    setAreaId(addedProducts[0].areaId);

    console.log(addedProducts);
  }, [addedProducts])

  if (isLoading) {
    return <LoadingComponent/>;
  }

  return (<AreaDetailsContainer>
    <ArrowBackIcon sx={ {
      position: 'absolute',
      top: '24px',
      left: '0',
      width: '24px',
      height: '24px',
      cursor: 'pointer'
    } } onClick={ () => navigate(`/area/${ areaId }`) }/>
    <Typography variant='h1' sx={ titleStyles }>Корзина</Typography>

    {addedProducts.map((el) => {
      return <CartItem {...el} key={el.weight + el.baseProductId} />
    })}

    <NavToCartContainer>
      <NavToCartButton onClick={makeOrder}>
        Сделать заказ
      </NavToCartButton>
    </NavToCartContainer>

  </AreaDetailsContainer>)
};

export default CartPage;