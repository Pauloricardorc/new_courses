import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, Outlet } from "react-router-dom";
import { Sidebar } from "./shared/Login/layouts/sidebar";
import Permission from "./core/assets/json/permission.json";
import Lottie from "lottie-react";
import { Header } from "./shared/Login/layouts/header";

import { query as q } from "faunadb";
import { fauna } from "./core/service/fauna";

export function PrivateRouter() {
  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center flex-col">
        <Lottie animationData={Permission} className="w-[450px]" />
        <span className="text-xl text-blue-500">Carregando Permissões</span>
      </div>
    );
  }

  async function faunaCreate(email: any) {
    await fauna.query(
      q.If(
        q.Not(q.Exists(q.Match(q.Index("user_by_email"), q.Casefold(email)))),
        q.Create(q.Collection("users"), { data: { email } }),
        q.Get(q.Match(q.Index("user_by_email"), q.Casefold(email)))
      )
    );
  }

  if (isAuthenticated && user) {
    faunaCreate(user.email);
  }

  return isAuthenticated ? (
    <div className="flex flex-col">
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
