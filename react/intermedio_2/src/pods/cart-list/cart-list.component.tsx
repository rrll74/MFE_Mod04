import React from "react";
import { CartContext } from "@/common/cart";
import { CartCardContainer } from "./components/cart-card";

export const CartListComponent: React.FC = () => {
  const { pets } = React.useContext(CartContext);

  return (
    <React.Fragment>
      {pets.map((pet) => (
        <CartCardContainer pet={pet} key={`pet${pet.id}`} />
      ))}
    </React.Fragment>
  );
};
