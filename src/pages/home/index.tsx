import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { CardProfile } from "./components/cardProfile";
import { CardNews } from "./components/news";
import { formatDistance, subDays } from "date-fns";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../core/service/firebase";
import { useEffect } from "react";
import { ApiAuth } from "../../core/service/auth0/auth";

export function Home() {
  const [document] = useAllPrismicDocumentsByType("feeds");

  async function feedActions() {
    const ref = collection(firestore, "feed");
    document?.map(async (feed) => {
      const q = query(
        collection(firestore, "feed"),
        where("id", "==", feed.id)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty === true) {
        addDoc(ref, {
          id: feed?.id,
          ultima_atualizacao_feed: new Date(feed?.last_publication_date),
          nome: feed.data.user_name[0].text,
          like: 0,
          comment: 0,
        });
      } else {
        querySnapshot.forEach((doc) => {
          if (doc.data().id !== feed.id) {
            addDoc(ref, {
              id: feed?.id,
              ultima_atualizacao_feed: new Date(feed?.last_publication_date),
              nome: feed.data.user_name[0].text,
              like: 0,
              comment: 0,
            });
          }
        });
      }
    });
  }

  async function getRolesUser() {
    const result = await ApiAuth.post("oauth/token", {
      Headers: {
        "content-type": "application/json",
      },
      data: {
        client_id: "fLnqomSSruA4qX5HHabP3qHKStU9Ohqb",
        client_secret:
          "OCxCqEN7pV_IhGTTen2_7Flk1-jloLTo_7Kx1MPC2UAttriFKqEJcU7ERMajDczf",
        audience: "https://dev-galax.us.auth0.com/api/v2/",
        grant_type: "client_credentials",
      },
    });
    console.log(result);
  }

  useEffect(() => {
    getRolesUser();
    feedActions();
  }, [document]);

  return (
    <div className="flex w-full p-2 md:p-0 bg-slate-100">
      <div className="flex flex-col flex-1 h-screen overflow-auto 2xl:px-36">
        <header className="flex flex-col pb-8">
          <header className="flex flex-col gap-2 mt-8">
            <h1 className="text-2xl">Página Inicial</h1>
            <p className="text-gray-400">
              Todas as últimas publicações vão está disponível aqui para que
              você possar ficar por dentro das publicações feita pelos tutores e
              de seus cursos favoritos ⭐
            </p>
          </header>
        </header>
        <main className="flex flex-col">
          {document?.map((feed) => (
            <CardNews
              key={feed.id}
              id={feed.id}
              img_profile={feed.data.img_user.url}
              title={feed.data.user_name[0].text}
              subTitle={feed.data.description_user[0].text}
              description={feed.data.descricao}
              time={formatDistance(new Date(), new Date(feed.data.publication))}
              feed={feed.data.feed[0]?.url || ""}
            />
          ))}
        </main>
      </div>
      <div className="w-[400px] p-8 hidden xl:block">
        <CardProfile />
      </div>
    </div>
  );
}
