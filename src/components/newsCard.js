import React from "react";
import dolingen from "./img/dolingen_thumb.png";
import { CardStyle, ProjectBtn, ProjectImg } from "./styled-components/styling";

function NewsCard() {
  return (
    <CardStyle>
      <ProjectImg src={dolingen} alt="A fictional news site" />
      <section>
        <h2>Dølingen</h2>
        <p>
          Første forsøk på Html og CSS. Her har jeg bare prøvd meg fram på alt
          fra Flexbox til å lenke til andre sider.
        </p>
      </section>
      <ProjectBtn
        href="https://christiansb89.github.io/Dolingen/"
        target="_blank"
      >
        Se hele siden
      </ProjectBtn>
    </CardStyle>
  );
}

export default NewsCard;
