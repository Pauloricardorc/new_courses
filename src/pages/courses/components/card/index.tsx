import { Play, Star } from "phosphor-react";
import React from "../../../../core/assets/react-light.svg";

export function CardCourses() {
  return (
    <div className="w-[380px] h-auto bg-white border border-gray-100 p-4 flex flex-col gap-4 drop-shadow-sm rounded-md">
      <header>
        <img src={React} alt="" className="w-16" />
      </header>
      <main className="flex flex-col gap-2">
        <p className="font-bold text-lg text-gray-600 capitalize">
          Como fazer para começar o processo de experiência do usuário
        </p>
        <span className="text-green-300 text-lg font-bold">$250</span>
        <hr className="border-gray-100 py-1" />
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="bg-gray-100 rounded-full p-1">
              <Play size={12} color="#5c48a2" weight="fill" />
            </div>
            <p className="text-sm">30 vídeos</p>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-gray-100 rounded-full p-1">
              <Star size={12} color="#5c48a2" weight="fill" />
            </div>
            <p className="text-sm">9k visualizações</p>
          </div>
        </div>
      </main>
      <footer>
        <button className="border rounded-md py-2 px-4 text-sm border-[#5c48a2] text-[#5c48a2] hover:bg-[#5c48a2] focus:text-white focus:bg-[#5c48a2] hover:text-white transition duration-150">
          Entrar Agora
        </button>
      </footer>
    </div>
  );
}
