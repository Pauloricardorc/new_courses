import { Route, Routes } from "react-router";
import { Cursos } from "./pages/courses";
import { DetailCourse } from "./pages/courses/details";
import { Home } from "./pages/home";
import { Sobre } from "./pages/infos";
import { Login } from "./pages/login";
import { Payment } from "./pages/pagamento";
import { PrivateRouter } from "./privateRouter";
import { NotFound } from "./shared/NotFound";

export function Router() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/cursos/:id" element={<DetailCourse />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
