import { FC } from "react";
import { Button } from "@mui/material";
import { AreaInterface } from "../api/api";
import { useNavigate } from "react-router-dom";
import { buttonStyles } from "./City";

export const Area: FC<AreaInterface> = ({id, name}) => {
  const navigate = useNavigate();

  const pickAreaHandler = () => {
    navigate(`/area/${id}`)
  }

  return <Button
    variant='outlined'
    onClick={ pickAreaHandler }
    sx={ buttonStyles }
  >
    { name }
  </Button>
}