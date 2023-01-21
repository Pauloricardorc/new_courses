import {
  useAllPrismicDocumentsByTag,
  useAllPrismicDocumentsByType,
} from "@prismicio/react";
import { CardCourses } from "./components/card";

export function Cursos() {
  const [document] = useAllPrismicDocumentsByType("courses");

  const cardCourses = document?.map((res) => res.data.body);

  console.log(cardCourses?.map((res) => res.items));

  return (
    <div className="flex flex-col w-full h-screen pl-2 md:pl-0">
      <header className="flex flex-col gap-2 mt-8">
        <h1 className="text-2xl">Meus Cursos</h1>
        <p className="text-gray-400">descrição dos curso</p>
      </header>
      <main className="mt-8 flex gap-4 flex-wrap">
        <CardCourses />
        <CardCourses />
        <CardCourses />
        <CardCourses />
        <CardCourses />
      </main>
    </div>
  );
}
