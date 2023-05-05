import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  background-color: ${props => props.theme.colors.gray};
  border-radius: 16px;
  max-width: 114px;
`;

export const ItemImage = styled.img`
  width: 98px;
  height: 98px;
  border-radius: 16px;
`;

export const ItemPrice = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: ${props => props.theme.colors.black};
  margin-top: 8px;
`;

export const ItemName = styled.h1`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${props => props.theme.colors.black};
  line-height: 15px;
  margin-top: 4px;
`;

export const AmountContainer = styled.div`
  display: flex;
  gap: 4px;
  color: ${props => props.theme.colors.darkGray};
  align-items: center;
  margin-top: 4px;
`;

export const ItemWeight = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
export const ItemAvailableAmount = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;
export const ItemAmountDot = styled.div`
  height: 2px;
  width: 2px;
  background-color: ${props => props.theme.colors.darkGray};
`;

export const ItemCounterContainer = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.white};
  margin-top: 8px;
  display: flex;
  padding: 4px 8px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
`;

export const IncrementDecrementButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: #fff;
  color: ${props => props.theme.colors.red};
  font-size: 22px;
  font-weight: 700;
  font-family: 'Inter';
  
  :disabled {
    color: ${props => props.theme.colors.darkGray};
  }
`;
export const ItemCount = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: ${props => props.theme.colors.black};
`;