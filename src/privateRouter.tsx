import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./shared/Login/context";
import { Sidebar } from "./shared/Login/layouts/sidebar";

export function PrivateRouter() {
  const { auth, session } = useContext(AuthContext);

  async function authUser() {
    return await auth();
  }

  useEffect(() => {
    authUser();
  }, []);

  return !!session ? (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
