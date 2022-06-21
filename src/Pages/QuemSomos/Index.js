import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FirstText, Container, AulaButton } from "./style.js";
import { AdicionarLista } from "../../Components/AdicionarLista.js";
import { api } from "../../Services/api.js";

export const QuemSomos = () => {

  const[usuario, setUsuario] = useState({
    nome:"",
    preco:""
  })

  useEffect(() =>{
    const getUsuario = async() =>{
      const response = await api.get(`ecommerce/produtos`)
      console.log(response.data);
    } 
    getUsuario()
  },[])

  var navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <>
      <Container>
        <FirstText>Adicione o seu desejo aqui!</FirstText>
        <AdicionarLista />
        <AulaButton onClick={handleClick}>Home</AulaButton>
      </Container>
    </>
  );
};
