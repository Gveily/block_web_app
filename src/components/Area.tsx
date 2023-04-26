import { FC } from "react";
import { Button } from "@mui/material";
import { AreaInterface } from "../api/api";
import { useNavigate } from "react-router-dom";

export const Area: FC<AreaInterface> = ({id, name}) => {
  const navigate = useNavigate();

  const pickAreaHandler = () => {
    navigate(`/area/${id}`)
  }

  return (
    <div className='area'>
      <div className="area-name">
        {name}
      </div>
      <Button variant='outlined' onClick={pickAreaHandler}>Выбрать</Button>
    </div>
  )
}