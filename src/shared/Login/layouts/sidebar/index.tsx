import { House, Notebook, Question } from "phosphor-react";
import { NavLink } from "react-router-dom";
import Coffee from "../../../../core/assets/coffee.svg";
import Lottie from "lottie-react";
import Student from "../../../../core/assets/json/student.json";
import { useAuth0 } from "@auth0/auth0-react";

export function Sidebar() {
  const { logout } = useAuth0();

  return (
    <div className="md:flex flex-col w-[350px] min-w-[200px] border-r border-gray-100 mr-4 h-screen justify-between hidden">
      <div className="">
        <header className="flex items-center justify-center gap-4 text-2xl font-semibold py-4">
          <img src={Coffee} alt="" className="w-14" />
          <span className="text-gray-600">Courses</span>
        </header>
        <main className="flex flex-col px-4 mt-8 text-gray-600 gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:text-black bg-gray-100 p-3 rounded-lg flex items-center gap-4 border border-transparent"
                : "hover:text-black p-3 rounded-lg flex items-center gap-4 border border-transparent"
            }
          >
            <House size={22} />
            Página Incial
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              isActive
                ? "hover:text-black bg-gray-100 p-3 rounded-lg flex items-center gap-4 border border-transparent"
                : "hover:text-black p-3 rounded-lg flex items-center gap-4 border border-transparent"
            }
          >
            <Notebook size={22} />
            Cursos
          </NavLink>
          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "hover:text-black bg-gray-100 p-3 rounded-lg flex items-center gap-4 border border-transparent"
                : "hover:text-black p-3 rounded-lg flex items-center gap-4 border border-transparent"
            }
          >
            <Question size={22} />
            Sobre
          </NavLink>
        </main>
      </div>
      <footer className="py-8 flex flex-col gap-2">
        <div className="flex items-center justify-center w-40 self-center justify-self-center">
          <Lottie animationData={Student} />
        </div>
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="
            h-10 w-32 items-center justify-center flex text-lg border p-3 rounded-md bg-red-500 hover:bg-red-600 text-gray-50 transition duration-300
            "
          >
            Sair
          </button>
        </div>
      </footer>
    </div>
  );
}
