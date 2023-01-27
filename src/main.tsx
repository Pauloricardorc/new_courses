import { PrismicProvider } from "@prismicio/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./core/auth/prismic";
import "./index.css";
import { Router } from "./router";
import { AuthProvider } from "./shared/Login/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { AuthenticatedProvider } from "./core/authenticated";
import { ptBR } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";

setDefaultOptions({ locale: ptBR });

const initialOptions = {
  "client-id": import.meta.env.VITE_PAYPAL_KEY,
  currency: "BRL",
  intent: "capture",
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Auth0Provider
      domain={import.meta.env.VITE_DOMAIN}
      clientId={import.meta.env.VITE_CLIENTID}
      redirectUri={window.location.origin}
    >
      <AuthProvider>
        <PrismicProvider client={client}>
          <PayPalScriptProvider options={initialOptions}>
            <AuthenticatedProvider>
              <Router />
            </AuthenticatedProvider>
          </PayPalScriptProvider>
        </PrismicProvider>
      </AuthProvider>
    </Auth0Provider>
  </BrowserRouter>
);
