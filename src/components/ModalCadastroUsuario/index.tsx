import { AbBotao, AbModal, AbCampoTexto  } from "ds-alurabooks-vitor";
import imagemMonitor from "../../assets/login.png";
import { useState } from "react";
import { http } from "../../http";

interface Props {
  closedModal: () => void;
}

export function ModalCadastroUsuario({ closedModal }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmada, setSenhaConfirmada] = useState("");

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      nome,
      email,
      senha,
      endereco,
      cep,
      complemento,
    };

    http
      .post("public/registrar", usuario)
      .then(() => {
        alert("Usuário foi cadastrado com sucesso!");
        setNome("");
        setEmail("");
        setEndereco("");
        setComplemento("");
        setCep("");
        setSenha("");
        setSenhaConfirmada("");
        closedModal();
      })
      .catch(() => {
        alert("OPS! Alguma coisa deu errado!");
      });
  };

  return (
    <AbModal titulo="Cadastrar" aberta={true} aoFechar={closedModal}>
      <div className="flex items-center pt-8">
        <figure>
          <img
            src={imagemMonitor}
            alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado."
          />
        </figure>
        <div className="flex flex-col">
          <form onSubmit={aoSubmeterFormular} className="w-[500px] max-w-full">
            <AbCampoTexto value={nome} label="Nome" onChange={setNome} />
            <AbCampoTexto value={email} label="E-mail" onChange={setEmail} />
            <AbCampoTexto
              value={endereco}
              label="Endereço"
              onChange={setEndereco}
            />
            <AbCampoTexto
              value={complemento}
              label="Complemento"
              onChange={setComplemento}
            />
            <AbCampoTexto value={cep} label="Cep" onChange={setCep} />
            <AbCampoTexto
              value={senha}
              label="Senha"
              onChange={setSenha}
              type="password"
            />
            <AbCampoTexto
              value={senhaConfirmada}
              label="Confirmação de senha"
              onChange={setSenhaConfirmada}
              type="password"
            />
            <footer className="mt-12 text-center">
              <AbBotao texto="Cadastrar" />
            </footer>
          </form>
        </div>
      </div>
    </AbModal>
  );
}
