import { PetEntity } from "@/pods/pet-list";

export interface PetsProfile {
  petList: PetEntity[];
}

export const createEmptyPetsProfile = (): PetsProfile => ({
  petList: [],
});
