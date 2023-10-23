import React from "react";
import "./inicio.css";

import Botao from "../../components/Botao";

export default function Inicio() {
  return (
    <div className="container">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo">
        <h2>Para onde deseja ir ?</h2>
        <br />
        <br />
        <Botao />
        <br />
        <Botao />
        <div className="botoes-acesso">
          <p className="cadastre-se">Faça seu cadastro</p>
          <a href="" className="aqui">
            Aqui
          </a>
        </div>
        <div className="botao-login-container">
          <div className="botao-login">Entrar</div>
        </div>
      </div>
    </div>
  );
}
