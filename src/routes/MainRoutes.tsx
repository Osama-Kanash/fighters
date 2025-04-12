import { lazy } from "react";
import Loadable from "../components/Loadable";
import { Outlet, RouteObject } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { MainLayout } from "../layout";

const Home = Loadable(lazy(() => import("../pages/HomePage")));
const AboutUs = Loadable(lazy(() => import("../pages/AboutUs")));

const MainRoutes: RouteObject = {
  path: `${AppRoutes.Root}`,
  element: <MainLayout />,
  children: [
    {
      element: <Outlet />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: AppRoutes.AboutUs,
          element: <AboutUs />,
        },
      ],
    },
  ],
};
export default MainRoutes;
