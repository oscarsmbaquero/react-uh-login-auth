import { useAuthState } from "../Context";
import { Navigate } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";

function AppRoutes() {
  const { user } = useAuthState();
  //console.log(user)

  return <>
   {user ? <Dashboard />: <Navigate to="/" />}
  </>;
}

export default AppRoutes;
