import React from "react";
import {Header} from './layout/Header.jsx'
import {Footer} from './layout/Footer'
import {Shop} from './layout/Shop'

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="hiden"></div>
        <Shop />
        <Footer />
      </div>
    </>
  );
}

export default App;
