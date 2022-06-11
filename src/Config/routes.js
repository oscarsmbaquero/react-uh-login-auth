import React from "react";
import Login from "../Pages/Login/";
import PageNotFound from "../Pages/NotFound";
import List from '../Pages/Pilots/List';
import Motos from '../Pages/Motos/Motos';
import Circuits from "../Pages/Circuits/Circuits";
import Details from "../Pages/Details/Details";

const routes = [
  {
    path: "/",
    element: <Login />,
    isPrivate: false
  },
  {
    path: "/*",
    element: <PageNotFound />,
    isPrivate: true
  },
  {
    path: "/list",
    element: <List />,
    isPrivate: true
  },
  {
    path: "/motos",
    element: <Motos />,
    isPrivate: true
  },
  {
    path: "/circuits",
    element: <Circuits />,
    isPrivate: true
  },
  {
    path: "/detail/:id",
    element: <Details />,
    isPrivate: true
  },
];

export default routes;