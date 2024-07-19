import logo from "../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { ModalLoginUsuario } from "../ModalLoginUsuario";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [modalLoginAberta, setModalLoginAberta] = useState(false);

  const token = sessionStorage.getItem("token");

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(
    token != null
  );

  const aoEfetuarLogin = () => {
    setModalLoginAberta(false);
    setUsuarioEstaLogado(true)
  };

  return (
    <header className="flex justify-between flex-row px-12 h-16">
      <div className="flex items-center flex-row gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo books" />
          <p className="font-medium text-2xl">
            <span className="font-bold">Vitor</span>Books
          </p>
        </div>
        <p className="text-sm">CATEGORIAS</p>
      </div>
      {!usuarioEstaLogado && (
        <>
          <button
            onClick={() => setModalLoginAberta(true)}
            className="flex items-center gap-2"
          >
            <FaRegUserCircle size={24} />
            <p className="text-sm">Login</p>
            <ModalLoginUsuario
              aberta={modalLoginAberta}
              aoFechar={() => setModalLoginAberta(false)}
              aoEfetuarLogin={aoEfetuarLogin}
            />
          </button>
        </>
      )}
      {usuarioEstaLogado && (
          <Link
            to="/minha-conta/pedidos"
            onClick={() => setModalLoginAberta(false)}
            className="flex items-center gap-2"
          >
            <FaRegUserCircle size={24} />
            <p className="text-sm">Meu perfil</p>
          </Link>
      )}
    </header>
  );
}
