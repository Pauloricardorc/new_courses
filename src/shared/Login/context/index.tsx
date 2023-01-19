import { Session } from "@supabase/supabase-js";
import {
  createContext,
  FormEvent,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../core/auth";

interface ISessionAuth {
  session?: Session | null;
  handleSingOut: () => void;
  handleSignIn: ({ email, password }: IPropsSignIn) => void;
  auth: () => Promise<any>;
}

interface IContext {
  children: ReactNode | null;
}

interface IPropsSignIn {
  email?: any;
  password?: any;
}

export const AuthContext = createContext({} as ISessionAuth);

export function AuthProvider({ children }: IContext) {
  const [session, setSession] = useState<Session | null | any>();
  const navigate = useNavigate();

  async function auth() {
    const user = await supabase.auth.getSession();
    setSession(user.data?.session);

    return user.data;
  }

  async function handleSignIn({ email, password }: IPropsSignIn) {
    if (!session?.user) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        return error.message;
      }
      setSession(data.session);
    }
  }

  async function handleSingOut() {
    await supabase.auth.signOut().then(() => navigate("/login"));
    setSession(null);
  }

  return (
    <AuthContext.Provider
      value={{ session, handleSingOut, handleSignIn, auth }}
    >
      {children}
    </AuthContext.Provider>
  );
}
