import fundo from "../../assets/fundo.png";
import { IoMdSearch } from "react-icons/io";

export function Banner() {
  return (
    <div className="relative">
      <div>
        <img
          className="w-full h-80 fixed"
          src={fundo}
          alt="Background de fundo"
        />
      </div>
      <div className="relative flex justify-center items-center flex-col h-80">
        <h1 className="text-zinc-50 font-bold text-4xl">
          Já sabe por onde começar?
        </h1>
        <p className="text-zinc-50 font-medium py-5">
          Encontre em nossa estante o que precisa para seu desenvolvimento!
        </p>
        {/* <input
          className="bg-transparent border border-zinc-50 text-zinc-50 rounded-full w-[570px] px-40 py-4 outline-none"
          type="text"
          placeholder="Já sabe por onde começar?"
        /> */}
        <div className="flex items-center justify-center border border-zinc-50 text-zinc-50 rounded-full w-[570px] px-36 py-4">
          <IoMdSearch size={24} />
          <input
            className="bg-transparent outline-none w-full placeholder:text-center"
            type="text"
            placeholder="Qual sera sua próxima leitura?"
          />
        </div>
      </div>
    </div>
  );
}
