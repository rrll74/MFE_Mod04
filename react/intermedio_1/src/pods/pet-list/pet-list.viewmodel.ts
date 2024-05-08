import { mapPetCollectionFromApiToVm } from "@/pods/pet-list/pet-list.mapper";

export interface PetEntity {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export type PetType = "cats" | "dogs";

export const findPetById = (id: string, pets: PetEntity[]) => {
  let petFound: PetEntity = null;

  pets.map((pet) => {
    if (pet.id === id) {
      petFound = pet;
    }
  });
  return petFound;
};

export const findPetsByType = (type: string, pets: Object): PetEntity[] => {
  return mapPetCollectionFromApiToVm(pets[type]);
};
