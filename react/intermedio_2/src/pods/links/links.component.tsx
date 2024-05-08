import React from "react";
import { Link } from "react-router-dom";
import { switchRoutes } from "@/core";

export const LinksComponent: React.FC = () => {
  return (
    <div className="links">
      <Link to={switchRoutes.kitties}>Kitties</Link>
      <Link to={switchRoutes.puppies}>Puppies</Link>
    </div>
  );
};
