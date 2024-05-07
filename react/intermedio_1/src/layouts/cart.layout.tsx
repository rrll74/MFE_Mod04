import React from "react";

interface Props {
  children: React.ReactNode;
}

export const CartLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-cart">
    <h1>Cart</h1>
    {children}
  </div>
);
