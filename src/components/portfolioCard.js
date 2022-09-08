import React from "react";
import {
  CardStyle,
  ProjectBtn,
  ProjectFrame,
} from "./styled-components/styling";

function PortfolioCard() {
  return (
    <CardStyle>
      <ProjectFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FhnixYAjWAbIXgdrQr3vE79%2Fportfolio-wireframe%3Fnode-id%3D72%253A680"
        allowfullscreen
      ></ProjectFrame>
      <section>
        <h2>Design for denne siden</h2>
        <p>
          Denne nettsiden ble opprinnelig designet i Figma. Her kan du se
          prosessen.
        </p>
      </section>
      <ProjectBtn
        href="https://www.figma.com/file/hnixYAjWAbIXgdrQr3vE79/portfolio-wireframe?node-id=72%3A680"
        target="_blank"
      >
        Se filen her
      </ProjectBtn>
    </CardStyle>
  );
}

export default PortfolioCard;
