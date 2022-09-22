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
  NameStyle,
  TitleStyle,
  MobileLinks,
  SidebarMail,
} from "./styled-components/styling";
import profile from "./img/profile.jpg";
import Modal from "./modal/aboutModal";
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import youtube from "./img/youtube.png";

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

        <NameStyle>Christian Sandum Breivik</NameStyle>
        <TitleStyle>Front End & Grafisk</TitleStyle>

        <Tagline>
          Front end student hos Jobloop med stor interesse for grafisk design.
        </Tagline>
      </section>

      {/* Below; Simple javascript for showing modal */}

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
        <MobileLinks>
          <a href="https://www.linkedin.com/in/chris-sabre/" className="link">
            <img src={linkedin}></img>
          </a>
          <a href="https://github.com/ChristianSB89" className="link">
            <img src={github}></img>
          </a>
          <a
            href="https://www.youtube.com/channel/UCPgLKJdt5ja35Y9hA1UAbJg"
            className="link"
          >
            <img src={youtube}></img>
          </a>
        </MobileLinks>
        <SidebarMail href="mailto:#" className="footerMail">
          christiansb.kodehode@gmail.com
        </SidebarMail>
        <FooterText>Copyright © 2022</FooterText>
        <FooterText>Christian Sandum Breivik</FooterText>
      </FooterDeco>
    </SideBarStyle>
  );
}

export default SideBar;
