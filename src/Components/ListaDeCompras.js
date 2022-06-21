import React from "react";

export const ListaDeCompras = (props) => {
  return (
    <>
      <h1>Lista de desejos:</h1>
      {props.lista.map((res) => (
        <div>
          <span>{res}</span>
        </div>
      ))}
    </>
  );
};
