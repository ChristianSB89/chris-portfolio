import React from "react";
import {
  ModalSection,
  AboutBtn,
  AboutTxt,
  ModalStyle,
  StyledLinks,
} from "../styled-components/styling";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import youtube from "../img/youtube.png";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <ModalSection>
      <div className="modal-content">
        <AboutTxt>
          <p>
            Heisann, jeg heter Christian og er profesjonell PC entusiast. Under
            belte har jeg kunnskap om HTML, CSS, JavaScript, React, Photoshop,
            Illustrator, Blender og Figma.
          </p>
          <p>
            Jeg har alltid vært nysgjerrig på koding og har prøvd meg litt i
            Python. Etter mange timer med modifisering av spill og feilsøking i
            konsoll så fant jeg ut at det var dette jeg ville gjøre.
          </p>
          <p>
            Har vært gamer siden Super Nintendo kom til Norge i 1992. Jeg har
            vært borti mange konsoller og ble tidlig PC-gamer. Denne hobbyen har
            fulgt meg hele livet. Er også veldig glad i grafisk design og har
            noe utdanning innen faget.
          </p>
          <p>
            Jobber også en del med 3D modellering, tegner, animerer og lager
            video grafikk. En annen ting som har fulgt meg gjennom livet er
            musikk. Jeg er trommeslager og lager musikk på PC med diverse
            programvarer.
          </p>
        </AboutTxt>
        <ModalStyle href="mailto:#" className="footerMail">
          christiansb.kodehode@gmail.com
        </ModalStyle>

        <StyledLinks>
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
        </StyledLinks>
        <div className="modal-footer">
          <AboutBtn onClick={props.onClose} className="modal-btn">
            Lukk
          </AboutBtn>
        </div>
      </div>
    </ModalSection>
  );
};

export default Modal;
