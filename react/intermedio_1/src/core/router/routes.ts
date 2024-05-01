import {} from "react-router-dom";

interface SwitchRoutes {
  root: string;
  kitties: string;
  puppies: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  kitties: "/kitties",
  puppies: "/puppies",
};
