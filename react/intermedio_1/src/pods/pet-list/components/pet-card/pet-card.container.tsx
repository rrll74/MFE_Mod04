import React from "react";
import { mainData } from "@/mockdata";
import { CartContext } from "@/common/cart";
import { PetsContext } from "@/common/pets";
import { findPetById, findPetsByType, PetEntity } from "@/pods/pet-list";
import { PetCardComponent } from "./pet-card.component";

interface Props {
  pet: PetEntity;
  type: string;
}

export const PetCardContainer: React.FC<Props> = (props) => {
  const { pet, type } = props;

  const { pets, setCartProfile } = React.useContext(CartContext);
  const { petList, setPetsProfile } = React.useContext(PetsContext);

  const handleAddAction = (id: string) => {
    // Add new pet to Cart
    const newList: PetEntity[] = pets;
    const petsByType = findPetsByType(type, mainData);

    newList.push(findPetById(id, petsByType));
    setCartProfile({ pets: newList });

    // Mark new pet as selected
    const newList2: PetEntity[] = [];

    petList.map((pet) => {
      const petFound = findPetById(pet.id, newList);

      if (petFound !== null) {
        pet.selected = true;
      }
      newList2.push(pet);
    });
    setPetsProfile({ petList: newList2 });

  };

  return <PetCardComponent pet={pet} handleClick={handleAddAction} />;
};
