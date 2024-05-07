import { PetEntity } from "@/pods/pet-list";
import React from "react";
import { CartCardComponent } from "./cart-card.component";

interface Props {
  pet: PetEntity;
}

export const CartCardContainer: React.FC<Props> = (props) => {
  const { pet } = props;

  return <CartCardComponent pet={pet} />;
};
