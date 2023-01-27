import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { CardProfile } from "./components/cardProfile";
import { CardNews } from "./components/news";
import { formatDistance, subDays } from "date-fns";
import {
  addDoc,
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "../../core/service/firebase";
import { useEffect } from "react";

export function Home() {
  const [document] = useAllPrismicDocumentsByType("feeds");

  // async function isFeedExist() {
  //   const userCollection = collection(firestore, "feed");
  //   const count = document?.map(async (feed) => {
  //     const queryCollection = query(
  //       userCollection,
  //       where("id", "!=", feed?.id)
  //     );
  //     const snapshot = await getCountFromServer(queryCollection);
  //     return snapshot.data().count;
  //   });
  //   return count;
  // }

  // async function feedActions() {
  //   const ref = collection(firestore, "feed");
  //   if ((await isFeedExist()) === undefined) {
  //     document?.map(async (feed) => {
  //       await addDoc(ref, {
  //         id: feed?.id,
  //         ultima_atualizacao_feed: new Date(feed?.last_publication_date),
  //         nome: feed.data.user_name[0].text,
  //         like: 0,
  //         comment: 0,
  //       });
  //     });
  //   }
  // }

  // useEffect(() => {
  //   feedActions();
  // }, []);

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
              time={formatDistance(subDays(new Date(), 3), new Date(), {
                addSuffix: true,
              })}
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
