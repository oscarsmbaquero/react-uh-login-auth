import { useAuthState } from "../Context";
import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
//import Header from "../Pages/Header/Header";
//import Footer from "../Pages/Footer/Footer";

function AppRoutes() {
  const { user } = useAuthState();
  console.log(user)

  return <>
   {user ? <Dashboard />: <Navigate to="/" />}
  </>;
}

export default AppRoutes;
