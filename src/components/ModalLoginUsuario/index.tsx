import { AbBotao, AbModal, AbCampoTexto } from "ds-alurabooks-vitor";
import imagemMonitor from "../../assets/login.png";
import { useState } from "react";
import { http } from "../../http";

interface Props {
  aberta: boolean;
  aoFechar: () => void
  aoEfetuarLogin: () => void
}

export function ModalLoginUsuario({ aberta, aoFechar, aoEfetuarLogin }: Props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const aoSubmeterFormular = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const usuario = {
      email,
      senha,
    };

    http.post("public/login", usuario)
      .then(resposta => {
        sessionStorage.setItem('token', resposta.data.access_token)
        setEmail('')
        setSenha('')
        aoEfetuarLogin()
      })
      .catch((error) => {
        if(error?.response?.data?.message)
            alert(error.response.data.message)
        else {
            alert('Aconteceu um erro inesperado ao efetuar o seu login! Entre em contato com o suporte!')
        }
      });
  };


  return (
    <AbModal titulo="LOGIN" aberta={aberta} aoFechar={aoFechar}>
      <div className="flex items-center pt-8">
        <figure>
          <img
            src={imagemMonitor}
            alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado."
          />
        </figure>
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
    </AbModal>
  );
}
