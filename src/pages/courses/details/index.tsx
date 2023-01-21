import { usePrismicDocumentByUID } from "@prismicio/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DefaultImg from "../../../core/assets/isnotvideo.png";

type PropsItems = {
  img: {
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
};

interface ICardProps {
  id: string;
  items: PropsItems[];
  primary: PropsPrimary;
}

export function DetailCourse() {
  const { id } = useParams();
  const [course, setCourse] = useState<ICardProps | any>([]);
  const [document] = usePrismicDocumentByUID("courses", "todos-os-cursos");

  useEffect(() => {
    async function GetCourse() {
      await document?.data.body.filter((res: ICardProps) => {
        if (res.id === id) {
          setCourse(res);
        }
      });
    }
    GetCourse();
  }, [document]);

  return course ? (
    <div className="flex w-full p-4 h-screen flex-col gap-3">
      <div className="max-w-3xl gap-4 flex flex-col">
        {course.items?.map((info: PropsItems) => (
          <div className="flex flex-col gap-3">
            <p className="text-xl text-gray-600 font-medium">
              {info.video_title[0].text}
            </p>
            <span className="text-base text-gray-500 font-normal">
              {info.video_description[0].text}
            </span>
          </div>
        ))}
        <div>
          <iframe
            className="w-full aspect-video rounded-md shadow-xl bg-gray-600"
            src={course.primary?.link_video.url || DefaultImg}
          ></iframe>
          <div className="mt-2 flex flex-col">
            <span className="text-lg text-gray-600 text-center py-4">
              {course.primary?.title[0].text}
            </span>
            {course.primary?.description.map((desc: { text: string }) => (
              <p className="text-sm text-gray-500 mt-2">{desc.text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center">
      <p>Carregando...</p>
    </div>
  );
}
