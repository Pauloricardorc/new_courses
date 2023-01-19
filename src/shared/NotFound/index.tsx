import Lottie from "lottie-react";
import { CaretLeft, Compass } from "phosphor-react";
import { Link } from "react-router-dom";
import ErrorImg from "../../core/assets/json/notfound.json";

export function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col">
      <Lottie animationData={ErrorImg} className="w-[500px] mb-6" />
      <div className="gap-4 flex flex-col items-center justify-center">
        <span className="text-xl text-gray-400 font-semibold max-w-[450px] items-center justify-center flex text-center">
          Acho que você acabou de perdendo no caminho
        </span>
        <div className="flex items-center gap-1 text-blue-500 ml-3">
          <Link to="/" className="font-semibold">
            deixa eu ajudar você
          </Link>
          <Compass size={22} />
        </div>
      </div>
    </div>
  );
}
