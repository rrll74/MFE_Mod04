import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  Checkbox,
  Typography,
} from "@mui/material";
import { PetEntity } from "@/pods/pet-list";

interface Props {
  pet: PetEntity;
  handleClick: (id: string) => void;
}

export const PetCardComponent: React.FC<Props> = (props) => {
  const { pet, handleClick } = props;

  return (
    <div className="pet-card">
      <CardContent>
        <img src={pet.picUrl} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {pet.title}
        </Typography>
      </CardContent>
      {pet.selected ? (
        <Checkbox disabled checked />
      ) : (
        <CardActions>
          <Button
            size="small"
            variant="contained"
            onClick={(e) => handleClick(pet.id)}
          >
            Add
          </Button>
        </CardActions>
      )}
    </div>
  );
};
