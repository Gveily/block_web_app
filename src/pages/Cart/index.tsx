import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Typography } from "@mui/material";
import { titleStyles } from "../Home";
import React, { useCallback, useEffect, useState } from "react";
import { AreaDetailsContainer, NavToCartButton, NavToCartContainer } from "../AreaDetails/areaDetails.styled";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";
import { CartItem } from "./cart-item";
import { LoadingComponent } from "../../components/loadingComponent";
import axios from "axios";
import { baseUrl, ProductInterface } from "../../api/api";
import { useTelegram } from "../../hooks/useTelegram";
import { AddedProductsContainer } from "./cart-item.styled";

const CartPage = () => {
  const navigate = useNavigate();
  const { addedProducts } = useAppSelector(ProductsSelector);
  const [tgData, setTgData] = useState<Array<ProductInterface>>([])
  const [areaId, setAreaId] = useState<number>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { tg } = useTelegram();

  const makeOrder = async () => {
    setIsLoading(true);
    const { data } = await axios.post<Array<ProductInterface>>(baseUrl + '/products/make-pending-payment', addedProducts);
    setTgData(data);
    setIsLoading(false);

    tg.MainButton.text = "Заплатить" + ' ' + data.reduce((acc, current) => {
      acc += +current.price
      return acc;
    }, 0) + 'zł';
    tg.MainButton.show();
  }

  const onSendData = useCallback(() => {
    tg.sendData(JSON.stringify(tgData));
  }, [tgData])

  useEffect(() => {
    tg.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])

  useEffect(() => {
    if (!addedProducts.length) {
      navigate(`/area/${ areaId }`);
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

    <AddedProductsContainer>
      { addedProducts.map((el) => {
        return <CartItem { ...el } key={ el.weight + el.baseProductId } isDisabled={!!tgData.length}/>
      }) }
    </AddedProductsContainer>

    {!tgData.length && <NavToCartContainer>
      <NavToCartButton onClick={ makeOrder }>
        Сделать заказ
      </NavToCartButton>
    </NavToCartContainer>}

  </AreaDetailsContainer>)
};

export default CartPage;