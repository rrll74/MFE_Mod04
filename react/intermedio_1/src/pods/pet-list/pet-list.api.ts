import { PetEntity, PetType } from "./pet-list.vm";
import { mainData } from "mockdata";

export interface PetEntityApi {
  id: string;
  picUrl: string;
  title: string;
}

export const getPetCollection = (type: PetType): PetEntity[] => {
  return mainData[type];
};
