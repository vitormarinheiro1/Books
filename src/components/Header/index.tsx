import logo from "../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { ModalCadastroUsuario } from "../ModalCadastroUsuario";


export function Header() {
  return (
    <header className="flex justify-between flex-row px-12 h-16">
      <div className="flex items-center flex-row gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo books" />
          <p className="font-medium text-2xl"><span className="font-bold">Vitor</span>Books</p>
        </div>
        <p className="text-sm">CATEGORIAS</p>
      </div>
      <button className="flex items-center gap-2">
        <FaRegUserCircle size={24} />
        <p className="text-sm">Login</p>
      </button>
      <ModalCadastroUsuario />
    </header>
  );
}
