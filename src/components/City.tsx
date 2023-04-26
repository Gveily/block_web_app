import { FC } from "react";
import './city.styles.css';
import { CityInterface } from "../api/api";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const imgMapper = {
  Gdansk: 'https://pliki.well.pl/i/01/66/37/016637_r2_1320.jpg',
  Gdynia: 'https://www.worldisbeautiful.eu/up_files/2091-Gdynia-noca.jpg',
  Sopot: 'https://najlepiejnadmorzem.pl/wp-content/uploads/2020/06/sopot-nad-morzem-najlepsze-miejscowosci-nad-Baltykiem.jpeg',
  Pruszcz: 'https://mieszkamwpruszczu.pl/res/907/701038/PG.jpg?width=950'
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