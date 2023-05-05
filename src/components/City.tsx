import { FC } from "react";
import { CityInterface } from "../api/api";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { defaultTheme } from "../theme";

export const buttonStyles = {
  color: defaultTheme.colors.black,
  backgroundColor: defaultTheme.colors.gray,
  width: '100%',
  borderRadius: '16px',
  border: 'none',
  padding: '22px 0',
  textTransform: 'capitalize !important',
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '20px',
  '&:hover': {
    backgroundColor: defaultTheme.colors.gray,
    border: 'none',
    opacity: 0.7
  }
};

export const City: FC<CityInterface> = ({ id, name }) => {
  // @ts-ignore
  const navigate = useNavigate();

  const pickCityHandler = () => {
    navigate(`/cities/${ id }`)
  }

  return <Button
    variant='outlined'
    onClick={ pickCityHandler }
    sx={ buttonStyles }
  >
    { name }
  </Button>
}