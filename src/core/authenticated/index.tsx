import { useAuth0 } from "@auth0/auth0-react";
import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { firestore } from "../service/firebase";

interface IAuthenticted {
  count: number;
  UserIsPaying: () => void;
}

interface IPropsAuthentication {
  children: ReactNode;
}

export const AuthenticatedContext = createContext({} as IAuthenticted);

export function AuthenticatedProvider({ children }: IPropsAuthentication) {
  const [count, setCount] = useState<any>();
  const { user } = useAuth0();

  async function UserIsPaying() {
    const userCollection = collection(firestore, "users");
    const queryCollection = query(userCollection, where("id", "==", user?.sub));
    const snapshot = await getCountFromServer(queryCollection);
    const qt = snapshot.data().count;
    setCount(qt);
  }

  useEffect(() => {
    UserIsPaying();
  }, [count]);

  return (
    <AuthenticatedContext.Provider value={{ count, UserIsPaying }}>
      {children}
    </AuthenticatedContext.Provider>
  );
}
