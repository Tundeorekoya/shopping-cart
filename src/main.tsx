import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
 import { ProductsProvider } from "./context/ProductProvider";
 import { CartProvider } from "./context/Cartprovider";
 
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
