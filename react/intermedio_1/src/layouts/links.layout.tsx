import React from "react";

interface Props {
  children: React.ReactNode;
}

export const LinksLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-cart">
    {children}</div>
);
