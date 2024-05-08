import React from "react";
import { PetsContext } from "@/common/pets";
import { CartContext } from "@/common/cart";
import { findPetById, PetType } from "./pet-list.viewmodel";
import { getPetCollection } from "./pet-list.api";
import { mapPetCollectionFromApiToVm } from "./pet-list.mapper";
import { PetListComponent } from "./pet-list.component";

interface Props {
  petType: PetType;
}

export const PetListContainer: React.FC<Props> = (props) => {
  const { petType } = props;
  // const [pets, setPets] = React.useState<PetEntity[]>([]);
  const { petList, setPetsProfile } = React.useContext(PetsContext);
  const { pets } = React.useContext(CartContext);

  React.useEffect(() => {
    const list = mapPetCollectionFromApiToVm(getPetCollection(petType));

    list.map((pet) => {
      const petFound = findPetById(pet.id, pets);

      if (petFound !== null) {
        pet.selected = true;
      }
    });
    setPetsProfile({ petList: list });
  }, [petType]);

  return (
    <div className="layout-main-list">
      <PetListComponent petList={petList} petType={petType} />
    </div>
  );
};
