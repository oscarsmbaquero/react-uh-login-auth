import React from "react";
import Login from "../Pages/Login/";
import PageNotFound from "../Pages/NotFound";
import List from '../Pages/Pilots/List';
import Motos from '../Pages/Motos/Motos';
import Circuits from "../Pages/Circuits/Circuits";
import Form  from "../Pages/Form/Form";
import Details from "../Pages/Details/Details";
import Delete from "../Pages/Delete/Delete";
import AddPilots from "../Pages/AddPilots/AddPilots";

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
    path: "/pilots/delete/:_id",
    element: <Delete />,
    isPrivate: true
  },
  {
    path: "form",
    element: <Form />,
    isPrivate: true
  },
  {
    path: "addPilot",
    element: <AddPilots />,
    isPrivate: true
  },
];

export default routes;