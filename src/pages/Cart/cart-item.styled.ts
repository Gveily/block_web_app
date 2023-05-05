import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CartItemImage = styled.img`
  height: 98px;
  width: 98px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const CartItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 140px;
`;



export const CartItemName = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: ${props => props.theme.colors.black};
`;

export const CartItemPrice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: ${props => props.theme.colors.black};
`;

export const CartItemWeightAndArea = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: ${props => props.theme.colors.darkGray};
`;

export const CartItemActions = styled.div`
  display: flex;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 2px 12px rgba(125, 131, 137, 0.16);
  justify-content: space-between;
  width: 93px;
  align-items: center;
  margin-left: 19px;
`;

export const CartItemAction = styled.button`
  outline: none;
  border: none;
  background-color: ${props => props.theme.colors.red};
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  border-radius: 50%;
`;

export const CartItemCounter = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: ${props => props.theme.colors.red};
`;