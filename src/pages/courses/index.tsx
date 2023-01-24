import { CardCourses } from "./components/card";

export function Cursos() {
  return (
    <div className="flex flex-col w-full h-screen pl-2 md:pl-0 overflow-auto">
      <header className="flex flex-col gap-2 mt-8">
        <h1 className="text-2xl">Meus Cursos</h1>
        <p className="text-gray-400">descrição dos curso</p>
      </header>
      <main className="mt-8 flex gap-4 flex-wrap">
        <CardCourses />
      </main>
    </div>
  );
}
