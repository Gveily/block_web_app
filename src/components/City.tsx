import { FC } from "react";
import './city.styles.css';
import { CityInterface } from "../api/api";
import Gdansk from '../assets/Gdansk.jpg';
import Gdynia from '../assets/Gdynia.jpg';
import Sopot from '../assets/Sopot.jpg';
import Pruszcz from '../assets/Pruszcz.jpg';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const imgMapper = {
  Gdansk,
  Gdynia,
  Sopot,
  Pruszcz
}

export const City: FC<CityInterface> = ({ id, name}) => {
  // @ts-ignore
  const imgPath: string = imgMapper[name];
  const navigate = useNavigate();

  const pickCityHandler = () => {
    navigate(`/cities/${id}`)
  }

  return (
    <div className='city'>
      <img src={imgPath} alt="" className='city-img'/>
      <div className={'city-name'}>{name}</div>
      <Button variant='outlined' onClick={pickCityHandler}>Выбрать</Button>
    </div>
  )
}