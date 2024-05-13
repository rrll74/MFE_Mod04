import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { MainPage, OrderPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<MainPage />} />
        <Route path={switchRoutes.list} element={<MainPage />} />
        <Route path={switchRoutes.order} element={<OrderPage />} />
      </Routes>
    </Router>
  );
};
