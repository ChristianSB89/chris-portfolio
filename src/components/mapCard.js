import React from "react";
import map from "./img/map.png";
import { CardStyle, ProjectBtn, ProjectImg } from "./styled-components/styling";

function MapCard() {
  return (
    <CardStyle>
      <ProjectImg src={map} alt="A map" />
      <section>
        <h2>Kart API</h2>
        <p>
          Hentet kart API fra <a href="https://leafletjs.com/">leafletjs.com</a>{" "}
          for å lære om henting av API.
        </p>
      </section>
      <ProjectBtn
        href="https://christiansb89.github.io/Map-Test/"
        target="_blank"
      >
        Prøv det her
      </ProjectBtn>
    </CardStyle>
  );
}

export default MapCard;
