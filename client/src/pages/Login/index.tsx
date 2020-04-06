import React from "react";

import "./styles.css";
interface IProps {}

export const Home: React.FC<IProps> = () => {
  return (
    <div className="container">
      <form className="form-signin">
        <h1>Bem vindo</h1>
        <h2>Sign in</h2>
        <div className="logo">
          <img src="" alt="" />
        </div>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Digite seu email"
        />
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="senha"
        />
        <button type="submit" className="button-login">
          Entrar
        </button>
      </form>
    </div>
  );
};
