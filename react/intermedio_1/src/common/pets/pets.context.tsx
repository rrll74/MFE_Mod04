import React from "react";
import { createEmptyPetsProfile, PetsProfile } from "./pets.viewmodel";

interface Context extends PetsProfile {
  setPetsProfile: (petsProfile: PetsProfile) => void;
}

export const PetsContext = React.createContext<Context>({
  petList: [],
  setPetsProfile: () =>
    console.warn(
      "** If you are reading this, likely you have forgotten to add the provider on top of your app"
    ),
});

interface Props {
  children: React.ReactNode;
}

export const PetsProvider: React.FC<Props> = ({ children }) => {
  const [petsProfile, setPetsProfile] = React.useState<PetsProfile>(
    createEmptyPetsProfile()
  );

  return (
    <PetsContext.Provider value={{ petList: petsProfile.petList, setPetsProfile }}>
      {children}
    </PetsContext.Provider>
  );
};
