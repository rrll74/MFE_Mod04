import React from "react";
import { CartContext } from "@/common/cart";
import { PetsContext } from "@/common/pets";
import { findPetById, PetEntity } from "@/pods/pet-list";
import { CartCardComponent } from "./cart-card.component";

interface Props {
  pet: PetEntity;
}

export const CartCardContainer: React.FC<Props> = (props) => {
  const { pet } = props;

  const { pets, setCartProfile } = React.useContext(CartContext);
  const { petList, setPetsProfile } = React.useContext(PetsContext);

  const handleDeleteAction = (id: string) => {
    // Deletes pet from Cart
    const newList: PetEntity[] = [];
    pets.map((pet) => {
      if (pet.id !== id) {
        newList.push(pet);
      }
    });
    setCartProfile({ pets: newList });

    // Mark pet as not selected
    const newList2: PetEntity[] = [];

    petList.map((pet) => {
      const petFound = findPetById(pet.id, newList);

      pet.selected = petFound !== null;
      newList2.push(pet);
    });
    setPetsProfile({ petList: newList2 });
  };

  return <CartCardComponent pet={pet} handleDelete={handleDeleteAction} />;
};
