import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import { titleStyles } from "../Home";
import React, { useEffect } from "react";
import { AreaDetailsContainer } from "../AreaDetails/areaDetails.styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";

const CartPage = () => {
  const navigate = useNavigate();
  const { addedProducts } = useAppSelector(ProductsSelector);
  const areaId = addedProducts[0].areaId;

  useEffect(() => {
    if (!addedProducts.length) {
      navigate('/')
    }

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
  </AreaDetailsContainer>)
};

export default CartPage;