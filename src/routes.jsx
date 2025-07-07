import {createBrowserRouter, createRoutesFromElements, Route,} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import DetailsCharacter from "./components/DetailsCharacter";
import DetailPlanets from "./components/DetailPlanets";
import DetailVehicles from "./components/DetailVehicles";


export const router = createBrowserRouter(
    createRoutesFromElements(
  
      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
        <Route path= "/" element={<Home />} />
        <Route path= "/detailVehicles/:id" element={<DetailVehicles />} />
        <Route path= "/detailPlanets/:id" element={<DetailPlanets />} />
        <Route path= "/detailsCharacter/:id" element={<DetailsCharacter />} />
      </Route>
    )
);