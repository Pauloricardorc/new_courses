import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./core/auth/prismic";
import "./index.css";
import { Router } from "./router";
import { AuthProvider } from "./shared/Login/context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PrismicProvider client={client}>
          <Router />
        </PrismicProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
