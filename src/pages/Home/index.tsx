import { City } from "../../components/City";
import React, { useEffect, useState } from "react";
import { baseUrl, CityInterface } from "../../api/api";
import axios from "axios";
import { Typography } from "@mui/material";
import styled from 'styled-components';
import { LoadingComponent } from "../../components/loadingComponent";
import { NavToCartButton, NavToCartContainer } from "../AreaDetails/areaDetails.styled";
import { useAppSelector } from "../../store/store";
import { ProductsSelector } from "../../store/slices/products";
import { useNavigate } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 390px;
  margin: 0px 16px 80px;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const titleStyles = {
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '20px',
  width: '100%',
  textAlign: 'center',
  marginBottom: '40px',
  marginTop: '23px',
}

const Home = () => {
  const [cities, setCities] = useState<Array<CityInterface>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { addedProducts } = useAppSelector(ProductsSelector);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCities = async () => {
      const response = await axios.get<Array<CityInterface>>(baseUrl + '/cities');
      setIsLoading(false);

      console.log(response);

      setCities(response.data);
    };

    fetchCities();
  }, []);

  if (isLoading) {
    return <LoadingComponent/>;
  }

  return (
    <Container>
      <Typography variant='h1' sx={ titleStyles }>Выберите город</Typography>
      <ListContainer>
        { cities.map((city) => {
          return <City { ...city } key={ city.id }/>
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

export default Home;