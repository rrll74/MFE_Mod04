import { AppLayout, CartLayout, MainLayout } from "@/layouts";
import { CartListContainer } from "@/pods/cart-list";
import { LinksComponent } from "@/pods/links/links.component";
import { PetListContainer } from "@/pods/pet-list";
import React from "react";

export const PuppiesPage: React.FC = () => {
  return (
    <AppLayout>
      <LinksComponent />
      <MainLayout>
        <h1>Dog List</h1>
        <PetListContainer petType={"dogs"} />
      </MainLayout>
      <CartLayout>
        <CartListContainer />
      </CartLayout>
    </AppLayout>
  );
};
