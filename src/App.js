import React from "react";
import { Header } from "./layout/Header.jsx";
import { Footer } from "./layout/Footer";
import { Shop } from "./layout/Shop";
import { ContextProvider } from "./Context";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="hiden"></div>
        <ContextProvider>
          <Shop />
        </ContextProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
