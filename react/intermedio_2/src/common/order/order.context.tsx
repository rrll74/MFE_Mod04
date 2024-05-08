import React from "react";
import { createEmptyOrderProfile, OrderProfile } from "./order.viewmodel";

interface Context extends OrderProfile {
  setOrderProfile: (orderProfile: OrderProfile) => void;
}

export const OrderContext = React.createContext<Context>({
  header: {
    id: 0,
    number: 0,
    provider: "",
    date: "",
    total: 0,
    state: 0,
  },
  rows: [],
  setOrderProfile: () =>
    console.warn(
      "** If you are reading this, likely you have forgotten to add the provider on top of your app"
    ),
});

interface Props {
  children: React.ReactNode;
}

export const OrderProvider: React.FC<Props> = ({ children }) => {
  const [orderProfile, setOrderProfile] = React.useState<OrderProfile>(
    createEmptyOrderProfile()
  );

  return (
    <OrderContext.Provider
      value={{
        header: orderProfile.header,
        rows: orderProfile.rows,
        setOrderProfile,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
