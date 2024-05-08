import React from "react";
import { PetEntity, PetType } from "./pet-list.viewmodel";
import { PetCardContainer } from "./components/pet-card";

interface Props {
  petList: PetEntity[];
  petType: PetType;
}

export const PetListComponent: React.FC<Props> = (props) => {
  const { petType, petList } = props;

  return (
    <React.Fragment>
      {petList.map((pet) => (
        <React.Fragment key={pet.id}>
          <PetCardContainer pet={pet} key={`cart${pet.id}`} type={petType} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
