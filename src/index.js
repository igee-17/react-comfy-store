import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// igee.us.auth0.com
//
// PRIVATE KEYS DO NOT COPY!!, SIGN UP ON AUTH0 TO GET

ReactDOM.render(
  <Auth0Provider
    // domain={process.env.REACT_APP_AUTH_DOMAIN}
    // clientId={process.env.REACT_APP_CLIENT_ID}
    domain="igee.us.auth0.com"
    clientId="yFVUR7dKVnp4OVLTip3vaVGstDcNZkzi"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
