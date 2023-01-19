import { CardCourses } from "./components/card";

export function Cursos() {
  return (
    <div className="flex flex-col w-full h-screen">
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
