import React from "react";
import { CartProvider, RouterComponent } from "@/core";

export const App = () => {
  return (
    <CartProvider>
      <RouterComponent />
    </CartProvider>
  );
};
