import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { OrderListScene, OrderScene } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<OrderListScene />} />
        <Route path={switchRoutes.list} element={<OrderListScene />} />
        <Route path={switchRoutes.order} element={<OrderScene />} />
      </Routes>
    </Router>
  );
};
