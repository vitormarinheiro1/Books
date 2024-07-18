import { AbBotao, AbModal, AbCampoTexto } from "ds-alurabooks-vitor";
import imagemMonitor from "../../assets/login.png";
import { useState } from "react";
import axios from "axios";

interface Props {
  closedModal: () => void;
}

export function ModalLoginUsuario({ closedModal }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      email,
      senha,
    };

    axios
      .post("http://localhost:8000/public/logar", usuario)
      .then(() => {
        alert("Usuário logado!");
        setEmail("");
        closedModal();
      })
      .catch(() => {
        alert("OPS! Alguma coisa deu errado!");
      });
  };

  return (
    <AbModal titulo="LOGIN" aberta={true} aoFechar={closedModal}>
      <div className="flex items-center pt-8">
        <figure>
          <img
            src={imagemMonitor}
            alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado."
          />
        </figure>
        <div className="flex flex-col">
          <form onSubmit={aoSubmeterFormular} className="w-[500px] max-w-full">
            <AbCampoTexto
              value={email}
              label="E-mail"
              placeholder="email@gmail.com"
              onChange={setEmail}
            />
            <AbCampoTexto
              value={senha}
              label="Senha"
              placeholder="*********"
              onChange={setSenha}
              type="password"
            />
            <footer className="mt-12 text-center">
              <AbBotao texto="Fazer Login" />
            </footer>
          </form>
        </div>
      </div>
    </AbModal>
  );
}
