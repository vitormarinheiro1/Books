import logo from "../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";


export function Banner() {
  return (
    <nav className="flex justify-between flex-row px-12 h-16">
      <div className="flex items-center flex-row gap-16">
        <div className="flex flex-row items-center gap-2">
          <img src={logo} alt="logo books" />
          <p className="font-bold">Books</p>
        </div>
        <p className="text-sm">CATEGORIAS</p>
      </div>
      <div className="flex items-center gap-1">
        <FaRegUserCircle size={20} />
        <p className="text-sm">Login</p>
      </div>
    </nav>
  );
}
