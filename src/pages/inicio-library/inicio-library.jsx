import React from "react";
import "./inicio-library.css";
import Livro from '../../components/livro/livro'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Botao from "../../components/Botao";

export default function Inicio() {
  return (
    <div className="container">
      <div className="Titulo">
        <h1 className="nome">LibraryClass</h1>
        <img src="logo.png" alt="" className="logo" />
      </div>
      <div className="conteudo-biblioteca">
        <div className="container-search">

        <Form className="d-flex w-100" >
            <Form.Control
              type="search"
              placeholder="Pesquisar livro"
              className="me-2"
              aria-label="Search"
            />
                    <Button >Search</Button>
          </Form>
        </div>
        <div className="container-livros">
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
        <Livro/>
    

        </div>
      </div>
    </div>
  );
}