import React from "react";
import { HomeStyle, DisplayRow } from "../components/styled-components/styling";
import DrumsCard from "../components/drumCard";
import MapCard from "../components/mapCard";
import ToDoCard from "../components/toDo";
import PortfolioCard from "../components/portfolioCard";
import NewsCard from "../components/newsCard";
import NavCard from "../components/navcard";

function Home() {
  return (
    <HomeStyle>
      <DisplayRow>
        <DrumsCard />
        <MapCard />
        <ToDoCard />
      </DisplayRow>
      <DisplayRow>
        <PortfolioCard />
        <NewsCard />
        <NavCard />
      </DisplayRow>
    </HomeStyle>
  );
}

export default Home;
