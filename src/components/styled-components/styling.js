import styled from "styled-components";

// --------------------------------------------------------
// Flex for the entire page (Sidebar + Main Content)
// --------------------------------------------------------

export const AppStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1000px) {
    justify-content: space-evenly;
  }
`;

// --------------------------------------------------------
// Styling for the sidebar element
// --------------------------------------------------------

export const SideBarStyle = styled.section`
  margin: 1em 0 1em 0;
  position: sticky;
  text-align: center;
  width: 20%;
  padding: 1.87em;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1000px) {
    width: 25vw;
    margin-top: 1.9em;
    height: 80vh;
    top: 0;
    left: 0;
    position: fixed;
  }
`;

// Styling of the profile image (sidebar)

export const ImageStyle = styled.img`
  border-radius: 1em;
  width: 12.5em;
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1000px) {
    width: 5em;
  }
`;

// Minor adjustments for the tagline (sidebar)

export const Tagline = styled.p`
  padding: 1em 3em;
  @media (max-width: 1000px) {
    padding: 1em 0;
  }
`;

// Styling for the section that contains the icons that links to social media (sidebar)

export const StyledLinks = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

// Styling of the nav and page buttons (sidebar)

export const NavDeco = styled.nav`
  padding: 3em 0;
`;

export const LiDeco = styled.li`
  list-style: none;
  padding: 0.5em;
  margin: 0.1em auto 0.1em auto;
  font-weight: 400;
  text-transform: uppercase;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  width: 50%;
  border-radius: 40px;
`;

export const LinkDeco = styled.a`
  font-weight: 500;
  text-decoration: none;
  color: black;
`;

// Styling of the footer (sidebar)

export const FooterDeco = styled.footer`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 1em;
  padding-top: 5em;
  @media (max-width: 1000px) {
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

export const FooterText = styled.p`
  @media (max-width: 1000px) {
    text-align: center;
  }
`;

export const MailStyle = styled.a`
  color: #0a323b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// --------------------------------------------------------
// Styling of "About" (modal)
// --------------------------------------------------------

export const ModalSection = styled.section`
  position: fixed;
  top: 1;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 1em 0 1em 0;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 65vh;
  overflow: auto;
  z-index: 9999; //So the modal will always be on top
  @media (max-width: 1000px) {
    width: 100vw;
    height: 85vh;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.9);
  }
`;

// Text box styling (modal)

export const AboutTxt = styled.div`
  padding: 2em;
  text-align: justify;
`;

// Button styling (modal)

export const AboutBtn = styled.button`
  text-decoration: none;
  text-align: center;
  color: #0a323b;
  padding: 1em 2.5em 1em 2.5em;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  &:hover {
    color: #82c0cc;
    background: rgba(255, 255, 255, 0.27);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
`;

// --------------------------------------------------------
// End of Sidebar Styles
// --------------------------------------------------------
// Styling for the main content
// --------------------------------------------------------

// Flex for display rows (Main Content)

export const DisplayRow = styled.div`
  margin: 1.87em;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

// Glass effect for display rows (Main Content)

export const HomeStyle = styled.section`
  margin: 1em 0 1em 0;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1000px) {
    z-index: -1;
    background: none;
    border: none;
    box-shadow: none;
    backdrop-filter: none;
    margin: 0;
    top: 0;
    right: 0;
    position: absolute;
  }
`;

// --------------------------------------------------------
// Card (parent) styling
// --------------------------------------------------------

export const CardStyle = styled.section`
  margin: 0 0.5em 0 0.5em;
  padding: 1em;
  text-align: center;
  width: 26em;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1000px) {
    width: 40vw;
    margin: 0 0 0.5em 0;
  }
`;

// Image and iFrame styling (card)

export const ProjectImg = styled.img`
  width: 15em;
  margin-top: 0.5em;
  border-radius: 16px;
  @media (max-width: 1000px) {
    width: 10em;
  }
`;

export const ProjectFrame = styled.iframe`
  width: 15em;
  height: 15em;
  margin-top: 0.5em;
  border-radius: 16px;
  @media (max-width: 1000px) {
    width: 10em;
    height: 10em;
  }
`;

// Project links (card)

export const ProjectBtn = styled.a`
  text-decoration: none;
  color: #0a323b;
  background: white;
  padding: 0.5em 2em 0.5em 2em;
  border-radius: 16px;
  &:hover {
    color: #82c0cc;
    background: rgba(255, 255, 255, 0.27);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 1000px) {
    padding: 0.5em 0.5em;
  }
`;
