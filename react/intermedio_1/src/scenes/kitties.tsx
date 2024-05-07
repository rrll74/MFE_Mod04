import React from "react";
import { AppLayout, CartLayout, MainLayout } from "@/layouts";
import { LinksContainer } from "@/pods/links";
import { PetListContainer } from "@/pods/pet-list";
import { CartListContainer } from "@/pods/cart-list";

export const KittiesPage: React.FC = () => {
  return (
    <AppLayout>
      <LinksContainer />
      <MainLayout>
        <h1>Kitty List</h1>
        <PetListContainer petType={"cats"} />
      </MainLayout>
      <CartLayout><CartListContainer /></CartLayout>
    </AppLayout>
  );
};
