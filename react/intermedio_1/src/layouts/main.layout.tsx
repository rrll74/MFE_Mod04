import React from "react";

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => (
  <div className="layout-main">{children}</div>
);
