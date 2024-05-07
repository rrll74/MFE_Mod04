import React from "react";
import { PetEntity, PetType } from "./pet-list.viewmodel";
import { getPetCollection } from "./pet-list.api";
import { mapPetCollectionFromApiToVm } from "./pet-list.mapper";
import { PetListComponent } from "./pet-list.component";

interface Props {
  petType: PetType;
}

export const PetListContainer: React.FC<Props> = (props) => {
  const { petType } = props;
  const [pets, setPets] = React.useState<PetEntity[]>([]);

  React.useEffect(() => {
    setPets(mapPetCollectionFromApiToVm(getPetCollection(petType)));
  }, []);

  return (
    <div className="layout-main-list">
      <PetListComponent pets={pets} />
    </div>
  );
};
