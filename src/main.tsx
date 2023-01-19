import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./core/auth/prismic";
import "./index.css";
import { Router } from "./router";
import { AuthProvider } from "./shared/Login/context";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENTID}
        redirectUri={window.location.origin}
      >
        <AuthProvider>
          <PrismicProvider client={client}>
            <Router />
          </PrismicProvider>
        </AuthProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
