import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import { titleStyles } from "../Home";
import React, { useEffect, useState } from "react";
import { AreaDetailsContainer } from "../AreaDetails/areaDetails.styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";
import { CartItem } from "./cart-item";

const CartPage = () => {
  const navigate = useNavigate();
  const { addedProducts } = useAppSelector(ProductsSelector);
  const [areaId, setAreaId] = useState<number>();

  useEffect(() => {
    setAreaId(addedProducts[0].areaId);

    console.log(addedProducts);
  }, [addedProducts])

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

    {addedProducts.map((el, index) => {
      return <CartItem {...el} key={index} />
    })}

  </AreaDetailsContainer>)
};

export default CartPage;