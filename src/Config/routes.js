import React from "react";
import Login from "../Pages/Login/";
import PageNotFound from "../Pages/NotFound";
import List from '../Pages/Pilots/List';
import Motos from '../Pages/Motos/Motos';
import Circuits from "../Pages/Circuits/Circuits";
import Details from "../Pages/Details/Details";
import DetailsMoto from "../Pages/DetailsMoto/DetailsMoto";
import AddPilots from "../Pages/AddPilots/AddPilots";
import AddTeam from "../Pages/AddTeam/AddTeam";
import EditPilots from "../Pages/EditPilots/EditPilots";
import EditMoto from "../Pages/EditMoto/EditMoto";

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
    path: "/pilots/name/:name",
    element: <Details />,
    isPrivate: true
  },
  {
    path: "addMoto",
    element: <AddTeam />,
    isPrivate: true
  },
  {
    path: "addPilot",
    element: <AddPilots />,
    isPrivate: true
  },
  {
    path: "/motos/:id",
    element: <DetailsMoto />,
    isPrivate: true
  },
  {
    path: "/edit/:id",
    element: <EditPilots />,
    isPrivate: true
  },
  {
    path: "/edit/moto/:id",
    element: <EditMoto />,
    isPrivate: true
  },
];

export default routes;