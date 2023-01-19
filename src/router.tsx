import { Route, Routes } from "react-router";
import { Cursos } from "./pages/courses";
import { Home } from "./pages/home";
import { Sobre } from "./pages/infos";
import { Login } from "./pages/login";
import { PrivateRouter } from "./privateRouter";
import { NotFound } from "./shared/NotFound";

export function Router() {
  return (
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/sobre" element={<Sobre />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
