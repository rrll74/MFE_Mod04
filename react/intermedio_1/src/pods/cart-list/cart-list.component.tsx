import React from "react";
import { CartContext } from "@/core";
import { CartCardContainer } from "./components/cart-card";

import { mainData } from "@/mockdata";
import { mapPetCollectionFromApiToVm } from "@/pods/pet-list/pet-list.mapper";

export const CartListComponent: React.FC = () => {
  const [cart, setCart] = React.useState(
    mapPetCollectionFromApiToVm(mainData["dogs"])
  );

  const setCartProfile = React.useContext(CartContext);

  const handleCart = (e: React.FormEvent<HTMLFormElement>) => {};

  return (
    <>
      {cart.map((pet) => (
        <CartCardContainer pet={pet} />
      ))}
    </>
  );
};
