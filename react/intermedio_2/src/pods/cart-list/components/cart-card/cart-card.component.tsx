import React from "react";
import { CardActions, CardContent, Icon } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { PetEntity } from "@/pods/pet-list";

interface Props {
  pet: PetEntity;
  handleDelete: (id: string) => void;
}

export const CartCardComponent: React.FC<Props> = (props) => {
  const { pet, handleDelete } = props;

  return (
    <div className="pet-cart-card">
      <CardContent>
        <img src={pet.picUrl} />
      </CardContent>
      <CardActions>
        <Delete onClick={(e) => handleDelete(pet.id)} />
      </CardActions>
    </div>
  );
};
