import { List } from "phosphor-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Coffee from "../../../../core/assets/coffee.svg";

export function Header() {
  const [headerActive, setHeaderActive] = useState(true);
  return (
    <div
      className={
        headerActive
          ? `md:hidden w-full h-auto bg-slate-100 flex items-center px-2 pb-4 justify-between flex-col`
          : `md:hidden w-full h-16 bg-slate-100 flex items-center px-2 justify-between flex-col`
      }
    >
      <div className="flex w-screen justify-between p-2">
        <img src={Coffee} alt="" className="w-10" />
        <button
          className="border-none"
          onClick={() => setHeaderActive(!headerActive)}
        >
          <List
            size={28}
            className={headerActive ? "text-primary" : "text-gray-600"}
            weight={headerActive ? "bold" : "fill"}
          />
        </button>
      </div>
      <div
        className={headerActive ? `flex flex-col w-full mt-4 gap-2` : `hidden`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "w-full p-3 flex items-center justify-center text-gray-200 font-semibold rounded-md bg-primary"
              : "w-full p-3 flex items-center justify-center bg-slate-200 text-gray-600 font-semibold rounded-md"
          }
        >
          <span>Início</span>
        </NavLink>
        <NavLink
          to="/cursos"
          className={({ isActive }) =>
            isActive
              ? "w-full p-3 flex items-center justify-center text-gray-200 font-semibold rounded-md bg-primary"
              : "w-full p-3 flex items-center justify-center bg-slate-200 text-gray-600 font-semibold rounded-md"
          }
        >
          <span>Curso</span>
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive
              ? "w-full p-3 flex items-center justify-center text-gray-200 font-semibold rounded-md bg-primary"
              : "w-full p-3 flex items-center justify-center bg-slate-200 text-gray-600 font-semibold rounded-md"
          }
        >
          <span>Sobre</span>
        </NavLink>
      </div>
    </div>
  );
}
