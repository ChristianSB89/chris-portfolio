// --------------------------------------------------------
// Some guidelines for navigating in this code:
//    -All my styled components is in this file
//    -If you want to inspect the style code for a specific object, just use Ctrl + F to find it
// On a sidenote: I might divide this file into smaller pieces in the future based on wether it is sidebar or not
// --------------------------------------------------------

// --------------------------------------------------------
// Content:
//    1. Flex for entire page
//    2. Styling for the sidebar element
//    3. Styling of "About" (modal)
//    4. Styling for the main content
//    5. Card (parent) styling
// --------------------------------------------------------

// --------------------------------------------------------
// 1. Flex for the entire page (Sidebar + Main Content)
// --------------------------------------------------------

import styled from "styled-components";

export const AppStyle = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    justify-content: space-evenly;
  }
`;

// --------------------------------------------------------
// 2. Styling for the sidebar element
// --------------------------------------------------------

export const SideBarStyle = styled.section`
  margin: 1em 0 1em 0;
  position: sticky;
  text-align: center;
  width: 20%;
  height: 55em;
  padding: 1.87em;
  background: rgba(255, 255, 255, 0.23);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1000px) {
    width: 25vw;
    /* margin-top: 1.9em; */
    height: 38.5em;
    top: 1em;
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

// Styling for name and title

export const NameStyle = styled.p`
  font-weight: bold;
`;

export const TitleStyle = styled.p`
  font-weight: 500;
`;

// Minor adjustments for the tagline (sidebar)

export const Tagline = styled.p`
  padding: 1em 3em;
  @media (max-width: 1000px) {
    padding: 1em 0;
  }
`;

// Styling for the section that contains the icons that links to social media (sidebar)

// Below; Only showing links on sidebar when width is over 1000 px

export const StyledLinks = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (min-width: 1000px) {
    display: none;
  }
`;

// Below; Only showing links in modal when width is 1000 px or lower

export const MobileLinks = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    display: none;
  }
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

export const ModalStyle = styled.a`
  color: #0a323b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 1000px) {
    display: none;
  }
`;

export const SidebarMail = styled.a`
  color: #0a323b;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

// --------------------------------------------------------
// 3. Styling of "About" (modal)
// --------------------------------------------------------

export const ModalSection = styled.section`
  position: fixed;
  top: 1;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 1em 0 1em 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(32px);
  -webkit-backdrop-filter: blur(32px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 80%;
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
// 4. Styling for the main content
// --------------------------------------------------------

// Flex for display rows (Main Content)

export const DisplayRow = styled.div`
  padding: 0.5em;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0.9em;
  }
`;

// Glass effect for display rows (Main Content)

export const HomeStyle = styled.section`
  margin: 1em 0 1em 1em;
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
    top: 1em;
    right: 0;
    left: 5.2em;
    position: relative;
  }
`;

// --------------------------------------------------------
// 5. Card (parent) styling
// --------------------------------------------------------

export const CardStyle = styled.section`
  margin: 0 0.5em;
  padding: 1em;
  text-align: center;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.21);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.3px);
  -webkit-backdrop-filter: blur(4.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  @media (max-width: 1000px) {
    width: 50%;
    margin: 0 0 0.5em 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
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

// Project links (buttons in card)

export const ProjectBtn = styled.a`
  text-decoration: none;
  color: #0a323b;
  background: rgba(255, 255, 255, 0.2);
  margin: 0.5em;
  padding: 0.5em 1em 0.5em 1em;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1.3px);
  -webkit-backdrop-filter: blur(1.3px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px;
  &:hover {
    color: #82c0cc;
    background: rgba(255, 255, 255, 0.27);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
  }
  @media (max-width: 1000px) {
    padding: 0.5em 0.5em;
  }
`;

export const BtnSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-content: space-around;
  }
`;
