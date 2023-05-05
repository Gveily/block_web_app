import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AreaInterface, baseUrl, ProductInterface } from "../../api/api";
import axios from "axios";
import { useTelegram } from "../../hooks/useTelegram";
import { AreaDetailsContainer, NavToCartButton, NavToCartContainer, ProductsContainer } from "./areaDetails.styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LoadingComponent } from "../../components/loadingComponent";
import { titleStyles } from "../Home";
import { Typography } from "@mui/material";
import { Item } from "../../components/Item";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";

const AreaPage = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<Array<ProductInterface>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [area, setArea] = useState<AreaInterface | null>(null);
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const { addedProducts } = useAppSelector(ProductsSelector);

  // const makeOrder = () => {
  //   tg.MainButton.text = "Заплатить";
  //   tg.MainButton.show();
  // }

  // const onSendData = useCallback(() => {
  //   tg.sendData(JSON.stringify(addedProducts));
  // }, [addedProducts])

  // useEffect(() => {
  //   tg.onEvent('mainButtonClicked', onSendData)
  //   return () => {
  //     tg.offEvent('mainButtonClicked', onSendData)
  //   }
  // }, [onSendData])

  useEffect(() => {
    tg.ready();

    const fetchProducts = async () => {
      const response = await axios.get<Array<ProductInterface>>(baseUrl + '/products/by-area-id', {
        params: {
          areaId: id
        }
      });
      const { data } = await axios.get(baseUrl + `/areas/${ id }`);
      setProducts(response.data);
      setArea(data);

      setIsLoading(false);
    };

    fetchProducts()
  }, [id]);

  if (isLoading) {
    return <LoadingComponent/>;
  }

  return (
    <AreaDetailsContainer>
      <ArrowBackIcon sx={ {
        position: 'absolute',
        top: '24px',
        left: '0',
        width: '24px',
        height: '24px',
        cursor: 'pointer'
      } } onClick={ () => navigate(`/cities/${ area?.cityId }`) }/>
      <Typography variant='h1' sx={ titleStyles }>{ area?.name }</Typography>
      <ProductsContainer>
        { products.map(product => {
          return <Item
            key={ product.id }
            amount={ product.amount }
            name={ product.baseProduct.name }
            price={ product.price }
            weight={ product.weight }
            img={ product.baseProduct.productPhoto }
            baseProductId={ product.baseProductId }
            areaId={parseInt(id as string)}
            areaName={area?.name as string}
          />
        }) }
      </ProductsContainer>

      { !!addedProducts.length && <NavToCartContainer>
        <NavToCartButton onClick={() => navigate('/cart')}>
          Перейти в корзину
        </NavToCartButton>
      </NavToCartContainer> }
    </AreaDetailsContainer>
  )
};

export default AreaPage;