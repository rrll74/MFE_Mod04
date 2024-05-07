import React from "react";
import { PetEntity } from "./pet-list.viewmodel";
import { PetCardContainer } from "./components/pet-card";

interface Props {
  pets: PetEntity[];
}

export const PetListComponent: React.FC<Props> = (props) => {
  const { pets } = props;

  return (
    <React.Fragment>
      {pets.map((pet) => (
        <React.Fragment key={pet.id}>
          <PetCardContainer pet={pet} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
