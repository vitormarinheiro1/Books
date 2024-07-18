import { AbBotao, AbCampoTexto, AbModal } from "ds-alurabooks-vitor";
import imagemMonitor from "../../assets/login.png";
import { useState } from "react";

export function ModalCadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirmada, setSenhaConfirmada] = useState("");

  return (
    <AbModal
      titulo="Cadastrar"
      aberta={true}
      aoFechar={() => console.log("fechando...")}
    >
      <div className="flex items-center pt-8">
        <figure>
          <img
            src={imagemMonitor}
            alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado."
          />
        </figure>
        <div className="flex flex-col">
          <form className="w-[500px] max-w-full">
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
            <AbCampoTexto value={senha} label="Senha" onChange={setSenha} />
            <AbCampoTexto
              value={senhaConfirmada}
              label="Confirmação de senha"
              onChange={setSenhaConfirmada}
            />
          </form>
          <footer className="mt-12 text-center">
            <AbBotao texto="Cadastrar" />
          </footer>
        </div>
      </div>
    </AbModal>
  );
}
