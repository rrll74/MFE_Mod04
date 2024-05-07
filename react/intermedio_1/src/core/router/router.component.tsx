import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { switchRoutes } from "./routes";
import { MainPage, KittiesPage, PuppiesPage } from "@/scenes";

// export const RouterComponent: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path={switchRoutes.root}
//           element={<MainPage title="Kitty List" type="cats" />}
//         />
//         <Route
//           path={switchRoutes.kitties}
//           element={<MainPage title="Kitty List" type="cats" />}
//         />
//         <Route
//           path={switchRoutes.puppies}
//           element={<MainPage title="Dog List" type="dogs" />}
//         />
//       </Routes>
//     </Router>
//   );
// };

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<KittiesPage />} />
        <Route path={switchRoutes.kitties} element={<KittiesPage />} />
        <Route path={switchRoutes.puppies} element={<PuppiesPage />} />
      </Routes>
    </Router>
  );
};
