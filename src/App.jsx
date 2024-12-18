import React, { useState } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProductListing from "./pages/ProductListing/ProductListing";
import "./App.css";
import Header from "./components/Header/Header";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store.js";

function App() {
  const [page, setPage] = useState("LandingPage");

  return (
    <>
      <Provider store={store}>
        {page != "LandingPage" && <Header navigate={setPage} />}
        <div className="">
          {page === "ProductListing" && <ProductListing navigate={setPage} />}
          {page === "LandingPage" && <LandingPage navigate={setPage} />}
          {page === "ShoppingCartPage" && <ShoppingCart navigate={setPage} />}
        </div>
      </Provider>
    </>
  );
}

export default App;
