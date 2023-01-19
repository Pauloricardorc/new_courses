import { Envelope, Key, User } from "phosphor-react";
import { FormEvent, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../shared/Login/context";
import { Input } from "./components/input";
import Coffee from "../../core/assets/coffee.svg";

export function Login() {
  const { handleSignIn, session, auth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | any>("");

  const signIn = async (e: FormEvent) => {
    e.preventDefault();
    const result = await handleSignIn({ email, password });
    setError(result);
  };

  useEffect(() => {
    const getSession = async () => {
      await auth();
    };
    getSession();
  }, [auth()]);

  return !session ? (
    <div className="h-screen w-screen bg-slate-100 text-gray-600 items-center justify-center flex flex-col gap-8">
      <div className="w-[480px] flex py-12 bg-white rounded-lg flex-col shadow-md">
        <header>
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center justify-center rounded-full -mt-24 bg-slate-100 p-4 mb-4 shadow-md">
              <img src={Coffee} alt="" className="w-24 -ml-3" />
            </div>
            <span className="text-2xl text-gray-600 font-semibold">
              Welcome Login
            </span>
            <p className="text-sm text-gray-400">
              faça seu login agora na plataforma de ensino
            </p>
          </div>
        </header>
        <form onSubmit={signIn}>
          <main className="mt-12 flex flex-col items-start px-12 gap-2">
            <Input.Root>
              <Input.Icon>
                <Envelope size={20} weight="fill" className="text-blue-600" />
              </Input.Icon>
              <Input.Input
                placeholder="Digite seu email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Input.Root>
            <Input.Root>
              <Input.Icon>
                <Key size={20} weight="fill" className="text-blue-600" />
              </Input.Icon>
              <Input.Input
                placeholder="Sua senha aqui"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Input.Root>
            {error === "Invalid login credentials" ? (
              <span className="text-red-500 text-xs">
                * Email ou senha incorretos
              </span>
            ) : (
              ""
            )}
          </main>
          <footer className="flex items-center justify-center mt-6">
            <button className="w-[80%] bg-blue-600 h-11 text-gray-100 rounded-md hover:bg-blue-700">
              Entrar
            </button>
          </footer>
        </form>
      </div>
      {/* <a href="" className="">
        Esqueceu sua senha ?
      </a>{" "} */}
    </div>
  ) : (
    <Navigate to={"/"} />
  );
}
