import React from "react";
import { PetsProvider } from "@/common/pets";
import { CartProvider } from "@/common/cart";
import { AppLayout, CartLayout, MainLayout } from "@/layouts";
import { LinksContainer } from "@/pods/links";
import { PetListContainer, PetType } from "@/pods/pet-list";
import { CartListContainer } from "@/pods/cart-list";

interface Props {
  title: string;
  type: PetType;
}

export const MainPage: React.FC<Props> = (props) => {
  const { title, type } = props;

  return (
    <AppLayout>
      <LinksContainer />
      <PetsProvider>
        <CartProvider>
          <MainLayout>
            <h1>{title}</h1>
            <PetListContainer petType={type} />
          </MainLayout>
          <CartLayout>
            <CartListContainer />
          </CartLayout>
        </CartProvider>
      </PetsProvider>
    </AppLayout>
  );
};
