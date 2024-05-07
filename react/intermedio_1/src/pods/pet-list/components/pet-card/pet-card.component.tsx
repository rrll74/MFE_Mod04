import React from "react";
import { PetEntity } from "@/pods/pet-list";
import { Button, CardActions, CardContent, Typography } from "@mui/material";

interface Props {
  pet: PetEntity;
}

export const PetCardComponent: React.FC<Props> = (props) => {
  const { pet } = props;

  return (
    <div className="pet-card">
      <CardContent>
        <img src={pet.picUrl} />
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {pet.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">Add</Button>
      </CardActions>
    </div>
  );
};
