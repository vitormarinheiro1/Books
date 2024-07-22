import logo from "../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { ModalLoginUsuario } from "../ModalLoginUsuario";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export function Header() {
  const [modalLoginAberta, setModalLoginAberta] = useState(false);

  const token = sessionStorage.getItem("token");

  const [usuarioEstaLogado, setUsuarioEstaLogado] = useState<boolean>(
    token != null
  );

  const navigate = useNavigate()

  const aoEfetuarLogin = () => {
    setModalLoginAberta(false);
    setUsuarioEstaLogado(true)
    navigate('/')
  };

  const efetuarLogout = () => {
    setUsuarioEstaLogado(false)
    sessionStorage.removeItem('token')

  }

  return (
    <header className="flex justify-between flex-row px-12 h-16">
      <div className="flex items-center flex-row gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo books" />
          <Link to="/" className="font-medium text-2xl">
            <span className="font-bold">Vitor</span>Books
          </Link>
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
        <div className="flex gap-2">
          <Link
            to="/minha-conta/pedidos"
            onClick={() => setModalLoginAberta(false)}
            className="flex items-center gap-2"
          >
            <FaRegUserCircle size={24} />
            <p className="text-sm">Meu perfil</p>
          </Link>
            <button className="text-sm" onClick={efetuarLogout}>
              Sair
            </button>
        </div>
      )}
    </header>
  );
}
