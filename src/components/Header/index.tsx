import logo from "../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { ModalLoginUsuario } from "../ModalLoginUsuario";
import { useState } from "react";

export function Header() {
  const [openModal, setOpenModal] = useState(false)

  const openedModal = () => {
    setOpenModal(true)
  }

  const closedModal = () => {
    setOpenModal(false)
  }

  return (
    <header className="flex justify-between flex-row px-12 h-16">
      <div className="flex items-center flex-row gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo books" />
          <p className="font-medium text-2xl"><span className="font-bold">Vitor</span>Books</p>
        </div>
        <p className="text-sm">CATEGORIAS</p>
      </div>
      <button onClick={openedModal} className="flex items-center gap-2">
        <FaRegUserCircle size={24} />
        <p className="text-sm">Login</p>
      </button>
      {openModal && <ModalLoginUsuario closedModal={closedModal} />}
    </header>
  );
}
