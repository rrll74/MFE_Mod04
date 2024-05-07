import React from "react";
import { CardActions, CardContent } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { PetEntity } from "@/pods/pet-list";

interface Props {
  pet: PetEntity;
}

export const CartCardComponent: React.FC<Props> = (props) => {
  const { pet } = props;

  const handleDelete: React.MouseEventHandler = (e) => {};

  return (
    <div className="pet-cart-card">
      <CardContent>
        <img src={pet.picUrl} />
      </CardContent>
      <CardActions>
        <Delete onClick={handleDelete} />
      </CardActions>
    </div>
  );
};
