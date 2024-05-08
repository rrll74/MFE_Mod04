import { PetType } from "./pet-list.viewmodel";
import { mainData } from "mockdata";

export interface PetEntityApi {
  id: string;
  locImg: string;
  picUrl: string;
  title: string;
}

export const getPetCollection = (type: PetType): PetEntityApi[] => {
  return mainData[type];
};
