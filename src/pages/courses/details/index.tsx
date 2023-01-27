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
    <div className="flex w-full h-screen flex-col overflow-auto xl:overflow-hidden bg-slate-100">
      <div className="flex items-center h-auto w-full border-l border-gray-100">
        <div className="w-full flex gap-4 mx-40 mt-4 rounded-2xl drop-shadow-2xl p-2 items-center bg-white">
          {course[0]?.items.map((course, index) => (
            <div
              key={index}
              className={
                items === index
                  ? "w-auto h-auto max-h-[250px] flex items-center p-2 gap-4 drop-shadow-2xl border border-slate-100 bg-primary bg-opacity-90 rounded-xl hover:cursor-pointer bg-cover overflow-hidden transition duration-200"
                  : "w-auto h-auto max-h-[250px] flex items-center p-2 gap-4 border-primary border-opacity-10 border bg-white rounded-xl hover:cursor-pointer bg-cover overflow-hidden transition duration-200"
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
                      ? "text-sm text-center text-gray-200 font-semibold transition duration-200 max-w-[200px]"
                      : "text-sm text-center text-gray-600 font-semibold transition duration-200 max-w-[200px]"
                  }
                >
                  {course?.video_title[0]?.text}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 gap-4 flex flex-col py-6 xl:px-40 xl:overflow-auto bg-slate-100">
        <div className="flex flex-col gap-3">
          <p className="text-xl text-gray-600 font-medium">
            {course[0]?.items[0].video_title[0].text}
          </p>
          <span className="text-base text-gray-500 font-normal">
            {course[0]?.items[0].video_description[0].text}
          </span>
        </div>
        <div className="flex flex-col pb-4 px-1 items-center">
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
    </div>
  ) : (
    <div className="flex w-full p-4 h-screen flex-col gap-3 items-center justify-center">
      <p>Carregando</p>
    </div>
  );
}
