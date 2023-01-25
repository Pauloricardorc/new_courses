// import { useAuth0 } from "@auth0/auth0-react";
// import {
//   addDoc,
//   collection,
//   getDoc,
//   doc,
//   query,
//   where,
//   getDocs,
//   getCountFromServer,
// } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { firestore } from "../../core/service/firebase";

// export async function IsUserPayment() {
//   const navigate = useNavigate();
//   const { user } = useAuth0();
//   const [register, setRegister] = useState(0);

//   async function UserIsPaying() {
//     const userCollection = collection(firestore, "users");
//     const queryCollection = query(userCollection, where("id", "==", user?.sub));
//     const snapshot = await getCountFromServer(queryCollection);
//     if (snapshot.data().count === 1) {
//       navigate("/");
//     }
//     return setRegister(snapshot.data().count);
//   }

//   useEffect(() => {
//     UserIsPaying();
//   }, [register]);

//   return IsUserPayment();
// }
