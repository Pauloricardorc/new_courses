import wallpaperCard from "../../../../core/assets/wallpaperCard.png";
import ImgProfile from "../../../../core/assets/myimg.jpg";
import { useAuth0 } from "@auth0/auth0-react";

export function CardProfile() {
  const { user } = useAuth0();
  return (
    <div className="flex w-full h-auto flex-col rounded-md overflow-hidden border border-gray-200">
      <img src={wallpaperCard} alt="" className="h-36 bg-cover" />
      <div className="-mt-12 ml-4">
        <img
          src={user?.picture}
          alt=""
          className="w-20 rounded-full border-2 border-white drop-shadow-lg"
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
        <div className="flex p-2">
          <button className="w-full h-12 rounded-md bg-blue-500 text-gray-100 hover:bg-blue-600 transition duration-150">
            Configurações
          </button>
        </div>
      </div>
    </div>
  );
}
