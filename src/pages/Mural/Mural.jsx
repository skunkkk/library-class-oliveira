import React from "react";
import "./Mural.css";
export default function Mural() {
  return (
    <div className="container-mural">
      <div className="Titulo-mural">
        <h1 className="nome-mural">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo-mural" />
      </div>
      <div className="conteudo-mural">
      <div className="descricao-mural">
        <div className="sidenav">
      <ul >
            <li><a href="#" >Conta</a></li>
            <li><a href="#" > Library Class</a></li>
            <li><a href="#" >Configurações</a></li>
            <li><a href="#" >Ajuda</a></li>

        </ul>
        </div>
      </div>
      <div className="anuncios-mural">
      <p>Anuncios</p>

      </div>
      <div className="options-mural">
      <p>Sla</p>
      </div>
      </div>
    </div>
  );
}
