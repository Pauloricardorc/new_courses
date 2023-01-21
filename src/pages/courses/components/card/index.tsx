import { Play, Star } from "phosphor-react";
import React from "../../../../core/assets/react-light.svg";

export function CardCourses() {
  return (
    <div className="w-full md:w-[380px] h-auto bg-white border border-gray-100 p-4 flex flex-col gap-4 drop-shadow-sm rounded-md">
      <header>
        <img src={React} alt="" className="w-16" />
      </header>
      <main className="flex flex-col gap-2">
        <p className="font-bold text-lg text-gray-600 capitalize">
          Como fazer para começar o processo de experiência do usuário
        </p>
        <span className="text-green-300 text-lg font-bold">$250</span>
        <hr className="border-gray-100 py-1" />
        <div className="flex items-center gap-4 text-gray-500">
          <div className="flex items-center gap-1">
            <div className="bg-gray-100 rounded-full p-1">
              <Play size={12} className="text-primaryHover" weight="fill" />
            </div>
            <p className="text-sm">30 vídeos</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-gray-100 rounded-full p-1">
              <Star size={12} className="text-primaryHover" weight="fill" />
            </div>
            <p className="text-sm">9k visualizações</p>
          </div>
        </div>
      </main>
      <footer className="flex items-end justify-end">
        <button className="border rounded-md py-2 px-4 text-sm border-primary text-primary hover:bg-primaryHover hover:border-primaryHover focus:text-white focus:bg-primaryHover focus:border-primaryHover hover:text-white transition duration-150">
          Entrar Agora
        </button>
      </footer>
    </div>
  );
}
