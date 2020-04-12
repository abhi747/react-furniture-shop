import React from "react";

import AppNav from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <AppNav />
      <Menu />
      <Footer />
    </>
  );
};

export default App;
