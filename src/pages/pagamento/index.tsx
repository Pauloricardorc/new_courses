import { PayPalButtons } from "@paypal/react-paypal-js";
import { firestore } from "../../core/service/firebase";
import {
  addDoc,
  collection,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  getCountFromServer,
} from "firebase/firestore";
import { useAuth0 } from "@auth0/auth0-react";
import Lottie from "lottie-react";
import Super from "../../core/assets/json/super.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Payment() {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [paying, setPaying] = useState(0);

  async function UserIsPaying() {
    if (paying === 1) {
      navigate("/");
    }
    const userCollection = collection(firestore, "users");
    const queryCollection = query(userCollection, where("id", "==", user?.sub));
    const snapshot = await getCountFromServer(queryCollection);
    setPaying(snapshot.data().count);
    return snapshot.data().count;
  }

  async function handleSavePayment() {
    if ((await UserIsPaying()) === 0) {
      const ref = collection(firestore, "users");

      await addDoc(ref, {
        id: user?.sub,
        pagamento: true,
        email: user?.email,
        foto: user?.picture,
        data: new Date(),
      });

      setPaying(1);
    } else {
      return null;
    }
  }

  useEffect(() => {
    UserIsPaying();
  }, [paying]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-100 flex-col">
      <main className="flex flex-col gap-4 mb-4">
        <span className="text-2xl text-gray-600 w-[300px] text-center">
          Faça sua colaboração e vire um
          <p className="text-yellow-500 font-semibold mt-2">Usuário PRO</p>
        </span>
        <Lottie animationData={Super} className="w-[300px]" />
      </main>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: "1" },
              },
            ],
          });
        }}
        onApprove={(data: any, actions: any) => {
          return actions.order?.capture().then(function (details: any) {
            handleSavePayment();
          });
        }}
      />
    </div>
  );
}
