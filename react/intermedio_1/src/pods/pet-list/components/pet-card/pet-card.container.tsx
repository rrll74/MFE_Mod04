import React from "react";
import { PetEntity } from "@/pods/pet-list";
import { PetCardComponent } from "./pet-card.component";

interface Props {
  pet: PetEntity;
}

export const PetCardContainer: React.FC<Props> = (props) => {
  const { pet } = props;
  return <PetCardComponent pet={pet} />;
};
