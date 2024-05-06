import * as vm from "./pet-list.vm";
import * as api from "./pet-list.api";

export const mapPetFromApiToVm = (pet: api.PetEntityApi): vm.PetEntity => ({
  id: pet.id,
  picUrl: pet.picUrl,
  title: pet.title,
});

export const mapPetCollectionFromApiToVm = (
  petColllection: api.PetEntityApi[]
): vm.PetEntity[] => petColllection.map((pet) => mapPetFromApiToVm(pet));
