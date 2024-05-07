import React from "react";

import { CartProfile, createEmptyCartProfile } from "./cart.viewmodel";

interface Context extends CartProfile {
  setCartProfile: (cartProfile: CartProfile) => void;
}

export const CartContext = React.createContext<Context>({
  pets: [],
  setCartProfile: () =>
    console.warn(
      "** If you are reading this, likely you have forgotten to add the provider on top of your app"
    ),
});

interface Props {
  children: React.ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cartProfile, setCartProfile] = React.useState<CartProfile>(
    createEmptyCartProfile()
  );

  return (
    <CartContext.Provider value={{ pets: cartProfile.pets, setCartProfile }}>
      {children}
    </CartContext.Provider>
  );
};
