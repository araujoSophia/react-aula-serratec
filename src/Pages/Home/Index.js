import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Container, HomeButton, Texto } from "./style.js";
import {imagem} from "../img/bem-vindo.jpg"

export const Home = () => {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/quemsomos");
  }

  return (
    <>
      <Container>
        <img src={require('../img/bem-vindo.jpg')} width="25%" height="40%" />
        <Texto> Clicando abaixo você pode listar todos os seus desejos...</Texto>
        <HomeButton onClick={handleClick}>Lista de desejos</HomeButton>
      </Container>
    </>
  );
};
