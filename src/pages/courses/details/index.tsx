import { usePrismicDocumentByUID } from "@prismicio/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DefaultImg from "../../../core/assets/isnotvideo.png";

type PropsItems = {
  image: {
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
  video_complet: {
    link_type: string;
    url: string;
  };
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
};

interface ICardProps {
  id: string;
  items: PropsItems[];
  primary: PropsPrimary;
}

export function DetailCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState<ICardProps[]>([]);
  const [content, setContent] = useState<PropsItems[]>([]);
  const [items, setItem] = useState(0);
  const [document] = usePrismicDocumentByUID("courses", "todos-os-cursos");

  useEffect(() => {
    async function GetCourse() {
      const result = await document?.data.body.filter((res: ICardProps) => {
        if (res.id === id) {
          return res;
        }
      });
      setCourse(result);
      setContent(result[0].items);
    }
    GetCourse();
  }, [document]);

  return course ? (
    <div className="flex xl:flex-row w-full h-screen gap-3 xs:flex-col overflow-auto xl:overflow-hidden">
      <div className="flex-1 gap-4 flex flex-col p-2 xl:px-32 xl:overflow-auto">
        <div className="flex flex-col gap-3">
          <p className="text-xl text-gray-600 font-medium">
            {course[0]?.items[0].video_title[0].text}
          </p>
          <span className="text-base text-gray-500 font-normal">
            {course[0]?.items[0].video_description[0].text}
          </span>
        </div>
        <div className="flex flex-col pb-4">
          <iframe
            className="w-full aspect-video rounded-md shadow-xl bg-gray-600 flex"
            src={content[items]?.video_complet?.url || DefaultImg}
          ></iframe>
          <div className="mt-2 flex flex-col">
            <span className="text-lg text-gray-600 text-center py-4">
              {content[items]?.video_title[0]?.text}
            </span>
            {content[items]?.video_description.map(
              (desc: { text: string }, index) => (
                <p key={index} className="text-sm text-gray-500 mt-2">
                  {desc.text}
                </p>
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex xl:max-w-[400px] border-l border-gray-200 h-screen">
        <div className="w-[500px] h-[400px] flex flex-col gap-4 p-4">
          {course[0]?.items.map((course, index) => (
            <div
              key={index}
              className={
                items === index
                  ? "w-full h-auto max-h-[150px] flex p-2 gap-4 bg-primary rounded-md hover:cursor-pointer bg-cover overflow-hidden"
                  : "w-full h-auto max-h-[150px] flex p-2 gap-4 bg-slate-100 rounded-md hover:cursor-pointer bg-cover overflow-hidden"
              }
              onClick={() => setItem(index)}
            >
              <img
                src={course?.image?.url}
                alt=""
                className="w-28 h-20 rounded-md"
              />
              <div className="flex flex-col gap-2">
                <span
                  className={
                    items === index
                      ? "text-base text-gray-200 font-semibold transition duration-200"
                      : "text-base text-gray-600 font-semibold transition duration-200"
                  }
                >
                  {course?.video_title[0]?.text}
                </span>
                <span
                  className={
                    items === index
                      ? "text-sm text-gray-400 transition duration-200 overflow-auto"
                      : "text-sm text-gray-500 transition duration-200 overflow-auto"
                  }
                >
                  {course?.video_description[0]?.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-full p-4 h-screen flex-col gap-3 items-center justify-center">
      <p>Carregando</p>
    </div>
  );
}
