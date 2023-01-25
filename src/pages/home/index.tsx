import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { CardProfile } from "./components/cardProfile";
import { CardNews } from "./components/news";

export function Home() {
  const [document] = useAllPrismicDocumentsByType("feeds");
  const data = document?.map((res) => res.data);

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
          {data?.map((feed) => (
            <CardNews
              key={feed.publication}
              img_profile={feed.img_user.url}
              title={feed.user_name[0].text}
              subTitle={feed.description_user[0].text}
              description={feed.descricao}
              feed={feed.feed[0]?.url || ""}
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
