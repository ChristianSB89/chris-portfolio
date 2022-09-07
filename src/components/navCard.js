import React from "react";
import {
  CardStyle,
  ProjectBtn,
  ProjectFrame,
} from "./styled-components/styling";

function NavCard() {
  return (
    <CardStyle>
      <ProjectFrame
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fo0Kyv62TbP5EhmOE9XqAo0%2FNAV-app%3Fnode-id%3D0%253A1"
        allowfullscreen
      ></ProjectFrame>
      <section>
        <h2>Workshop Prosjekt - Nav</h2>
        <p>
          Gruppeprosjekt der vi skulle finne en bedre løsning for Nav. Jeg stod
          for design.
        </p>
      </section>
      <ProjectBtn
        href="https://www.figma.com/file/o0Kyv62TbP5EhmOE9XqAo0/NAV-app?node-id=0%3A1"
        target="_blank"
      >
        Se hele prosjektet
      </ProjectBtn>
    </CardStyle>
  );
}

export default NavCard;
