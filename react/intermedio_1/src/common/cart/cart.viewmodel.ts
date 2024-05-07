import { PetEntity } from "@/pods/pet-list";

export interface CartProfile {
  pets: PetEntity[];
}

export const createEmptyCartProfile = (): CartProfile => ({
  pets: [],
});
