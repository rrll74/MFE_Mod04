import React from "react";
import { PetEntity } from "./pet-list.vm";

interface Props {
  pets: PetEntity[];
}

export const PetListComponent: React.FC<Props> = (props) => {
  const { pets } = props;

  return (
    <React.Fragment>
      {pets.map((pet) => (
        <React.Fragment key={pet.id}>
          <img src={pet.picUrl} />
          <span>{pet.title}</span>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
