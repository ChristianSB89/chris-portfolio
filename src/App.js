import React from "react";
import SideBar from "./components/sideBar.js";
import { AppStyle } from "./components/styled-components/styling";
import Home from "./pages/Home.js";

function App() {
  return (
    <AppStyle>
      <SideBar />
      <Home />
    </AppStyle>
  );
}

export default App;
