import React from "react";
import ToDo from "./img/to-doList.png";
import {
  CardStyle,
  ProjectBtn,
  ProjectImg,
  ProjectTxt,
} from "./styled-components/styling";

function ToDoCard() {
  return (
    <CardStyle>
      <ProjectImg src={ToDo} alt="An online to do list" />
      <section>
        <h2>To-do list</h2>
        <p>
          Blant de første JavaScript prosjektene der man skulle kunne sortere,
          fjerne enkelte ting og hele listen.
        </p>
      </section>
      <ProjectBtn
        href="https://christiansb89.github.io/todo-list/"
        target="_blank"
      >
        Prøv det her
      </ProjectBtn>
      <ProjectBtn
        href="https://github.com/ChristianSB89/todo-list"
        target="_blank"
      >
        Koden på GitHub
      </ProjectBtn>
    </CardStyle>
  );
}

export default ToDoCard;
