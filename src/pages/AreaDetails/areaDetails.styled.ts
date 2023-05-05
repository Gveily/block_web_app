import styled from "styled-components";

export const AreaDetailsContainer = styled.div`
  width: 100%;
  margin: 0px 16px;
  max-width: 390px;
  position: relative;
`;

export const ProductsContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const NavToCartContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 8px 16px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.white2};
`;

export const NavToCartButton = styled.button`
  background-color: ${props => props.theme.colors.red};
  border: none;
  outline: none;
  padding: 18px 0;
  width: 100%;
  color: ${props => props.theme.colors.white};
  border-radius: 12px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 1px;
  cursor: pointer;
`;