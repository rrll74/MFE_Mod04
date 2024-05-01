export interface PetProfile {
  idPet: string;
}

export interface CartProfile {
  pets: PetProfile[];
}

export const createEmptyCartProfile = (): CartProfile => ({
  pets: [],
});
