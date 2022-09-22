import React, { useState } from "react";
import {
  SideBarStyle,
  ImageStyle,
  LiDeco,
  NavDeco,
  FooterDeco,
  AboutBtn,
  Tagline,
  FooterText,
} from "./styled-components/styling";
import profile from "./img/profile.jpg";
import Modal from "./modal/aboutModal";

function SideBar() {
  const [show, setShow] = useState(false);

  return (
    <SideBarStyle>
      <section className="info">
        <ImageStyle
          src={profile}
          alt="Chris smiling while looking to the side of the camera"
          className="sidebar-image"
        />

        <p id="name">Christian Sandum Breivik</p>
        <p id="profession">Front End & Grafisk</p>

        <Tagline>
          Front end student hos Jobloop med stor interesse for grafisk design.
        </Tagline>
      </section>

      {/* Buttons for navigation */}

      <section>
        <AboutBtn onClick={() => setShow(true)}>Om meg</AboutBtn>
        <Modal onClose={() => setShow(false)} show={show} />
      </section>

      {/* <NavDeco> *Might add more pages in the future, and use react router dom*
        <ul>
          <LiDeco>Hjem</LiDeco>
          <LiDeco>Front End</LiDeco>
          <LiDeco>Grafisk</LiDeco>
          <LiDeco>Musikk</LiDeco>
        </ul>
      </NavDeco> */}
      {/* Links to other pages with copyright and mail at bottom of sidebar */}

      <FooterDeco>
        <FooterText>Copyright © 2022</FooterText>
        <FooterText>Christian Sandum Breivik</FooterText>
      </FooterDeco>
    </SideBarStyle>
  );
}

export default SideBar;
