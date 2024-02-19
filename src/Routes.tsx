import React, { Suspense, lazy } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import AboutUs from "./pages/about_us/AboutUs";
import Home from "./pages/home/Home";
import PropertyPage from "./pages/property/PropertyPage";
import ServicesPage from "./pages/services/ServicesPage";
import ContactUs from "./pages/contact_us/ContactUs";
import PropertyDetailsPage from "./pages/property/PropertyDetailsPage";
import LoadingPage from "./pages/loadingPage/LoadingPage";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path={"about-us"} element={<AboutUs />} />
        <Route path={"contact-us"} element={<ContactUs />} />
        <Route path={"properties"} element={<PropertyPage />} />
        <Route
          path={"property-details/:id"}
          element={<PropertyDetailsPage />}
        />

        <Route path={"services"} element={<ServicesPage />} />
      </Route>
    )
  );
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Routes;
