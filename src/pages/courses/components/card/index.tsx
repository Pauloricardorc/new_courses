import { ReactNode, useEffect, useState } from "react";
import { useAllPrismicDocumentsByType } from "@prismicio/react";
import { Play, Star } from "phosphor-react";
import React from "../../../../core/assets/react-light.svg";
import { NavLink } from "react-router-dom";

type PropsItems = {
  image: {
    url: string;
  };
  img_preview: {
    url: string;
  };
  video_description: {
    text: string;
    type: string;
  }[];
  video_title: {
    text: string;
    type: string;
  }[];
  price: {
    text: string;
    type: string;
  }[];
};

type PropsPrimary = {
  description: {
    type: string;
    text: string;
  }[];
  link_video: {
    link_type: string;
    url: string;
  };
  title: {
    type: string;
    text: string;
  }[];
  thumbnail: {
    url: string;
  };
  preview: {
    url: string;
  };
  price: {
    type: string;
    text: string;
  }[];
};

interface ICardProps {
  id: string;
  items: PropsItems[];
  primary: PropsPrimary;
}

type IImg = {
  thumbnail: string;
  preview: string;
};

export function CardCourses() {
  const [cardCourses, setCardCourses] = useState<ICardProps[]>([]);
  const [document] = useAllPrismicDocumentsByType("courses");

  useEffect(() => {
    document?.map((res) => setCardCourses(res.data.body));
  }, [document]);

  function RenderImg({ thumbnail, preview }: IImg) {
    const [renderImg, setRenderImg] = useState<ReactNode>();
    return (
      <div
        className="max-h-52 h-52 w-full flex transition duration-200"
        onMouseEnter={() =>
          setRenderImg(<img src={preview} alt="" className="w-full h-26" />)
        }
        onMouseLeave={() => setRenderImg("")}
      >
        {!renderImg ? (
          <img src={thumbnail} alt="" className="w-full h-26" />
        ) : (
          renderImg
        )}
      </div>
    );
  }
  return (
    <>
      {cardCourses.map((card) => (
        <div
          key={card.id}
          className="w-full md:w-[380px] h-auto bg-white border border-gray-100 flex flex-col gap-4 drop-shadow-sm rounded-md overflow-hidden"
        >
          <header className="relative">
            <RenderImg
              thumbnail={card.primary.thumbnail.url}
              preview={card.primary.preview.url}
            />
            <img src={React} alt="" className="w-24 px-4 absolute bottom-0" />
          </header>
          <main className="flex flex-col gap-2 px-4">
            <p className="font-bold text-lg text-gray-600 capitalize">
              {card.items[0].video_title[0].text}
            </p>
            <span className="text-green-500 text-lg font-semibold">
              R$ {card.primary.price[0].text}
            </span>
            <hr className="border-gray-100 py-1" />
            <div className="flex items-center gap-4 text-gray-500">
              <div className="flex items-center gap-1">
                <div className="bg-gray-100 rounded-full p-1">
                  <Play size={12} className="text-primaryHover" weight="fill" />
                </div>
                <p className="text-sm">{card.items.length} vídeos</p>
              </div>
              <div className="flex items-center gap-1 hover:cursor-pointer">
                <div className="bg-gray-100 rounded-full p-1">
                  <Star size={12} className="text-primaryHover" weight="fill" />
                </div>
                <p className="text-sm">9k visualizações</p>
              </div>
            </div>
          </main>
          <footer className="flex items-end justify-end px-4 pb-4">
            <NavLink
              to={`/cursos/${card.id}`}
              className="border rounded-md py-2 px-4 text-sm border-primary text-primary hover:bg-primary hover:border-primary focus:text-white focus:bg-primaryHover focus:border-primaryHover hover:text-white transition duration-150"
            >
              Entrar Agora
            </NavLink>
          </footer>
        </div>
      ))}
    </>
  );
}
