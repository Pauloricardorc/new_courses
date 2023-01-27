import wallpaperCard from "../../../../core/assets/wallpaperCard.png";
import ImgProfile from "../../../../core/assets/myimg.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import { Star } from "phosphor-react";
import { NavLink } from "react-router-dom";
import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../../../core/service/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthenticatedContext } from "../../../../core/authenticated";

export function CardProfile() {
  const { user } = useAuth0();
  const { count, UserIsPaying } = useContext(AuthenticatedContext);

  useEffect(() => {
    UserIsPaying();
  }, [count]);

  return (
    <div className="flex w-full h-auto flex-col rounded-md overflow-hidden border border-gray-100 bg-white drop-shadow-lg">
      <img src={wallpaperCard} alt="" className="h-36 bg-cover" />
      <div className="-mt-12 ml-4">
        <img
          src={user?.picture}
          alt=""
          className="w-20 h-20 rounded-full border-2 border-white drop-shadow-lg"
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="py-4 flex flex-col gap-1">
          <p className="font-semibold text-gray-700 capitalize">{user?.name}</p>
          <span className="text-sm text-gray-500">
            {/* Desenvolvedor Junior Front-End */}
          </span>
          <span className="text-sm text-gray-400">{user?.email}</span>
        </div>
        <hr className="border-gray-100" />
        <div className="py-4 text-sm">
          <div className="flex justify-between">
            <p className="text-gray-600">Visualizações no seu Perfil</p>
            <span className="text-blue-500 font-semibold">50</span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600">Total de posts</p>
            <span className="text-blue-500 font-semibold">200</span>
          </div>
        </div>
        <div className="flex p-2 flex-col gap-2">
          <NavLink
            to=""
            className="w-full h-12 rounded-md bg-primary text-gray-100 hover:bg-opacity-95 transition duration-150 flex items-center justify-center"
          >
            Configurações
          </NavLink>
          {count !== 1 && (
            <NavLink
              to="pagamento"
              className="w-full h-12 rounded-md bg-yellow-400 text-white hover:bg-yellow-500 transition duration-150 flex items-center justify-center gap-2"
            >
              Seja Pro
              <Star weight="fill" size={18} />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
