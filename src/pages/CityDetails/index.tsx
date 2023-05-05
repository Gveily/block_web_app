import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { AreaInterface, baseUrl } from "../../api/api";
import axios from "axios";
import { Area } from "../../components/Area";
import { Typography } from "@mui/material";
import { Container, ListContainer, titleStyles } from "../Home";
import { LoadingComponent } from "../../components/loadingComponent";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NavToCartButton, NavToCartContainer } from "../AreaDetails/areaDetails.styled";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";

const CityPage = () => {
  const { id } = useParams();
  const [areas, setAreas] = useState<Array<AreaInterface>>([]);
  const [cityName, setCityName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const { addedProducts } = useAppSelector(ProductsSelector);

  useEffect(() => {
    const fetchAreas = async () => {
      const response = await axios.get<Array<AreaInterface>>(baseUrl + '/areas/by-city', {
        params: {
          cityId: id
        }
      });
      const { data } = await axios.get(baseUrl + `/cities/${ id }`);

      setAreas(response.data);
      setCityName(data.name);
      setIsLoading(false);
    };

    fetchAreas();
  }, [id])

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <Container style={ { position: "relative" } }>
      <ArrowBackIcon sx={ {
        position: 'absolute',
        top: '24px',
        left: '0',
        width: '24px',
        height: '24px',
        cursor: 'pointer'
      } } onClick={() => navigate('/')}/>
      <Typography variant='h1' sx={ titleStyles }>{ cityName }</Typography>
      <ListContainer>
        { areas.map((area) => {
          return <Area { ...area } key={ area.id }/>
        }) }
      </ListContainer>

      { !!addedProducts.length && <NavToCartContainer>
        <NavToCartButton onClick={() => navigate('/cart')}>
          Перейти в корзину
        </NavToCartButton>
      </NavToCartContainer> }
    </Container>
  )
};

export default CityPage;