import fundo from "../../assets/fundo.png";
import { IoMdSearch } from "react-icons/io";

export function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${fundo})`,
        backgroundSize: "cover"
      }}
    >
      <div className="flex justify-center items-center flex-col h-80">
        <h1 className="text-zinc-50 font-bold text-4xl">
          Já sabe por onde começar?
        </h1>
        <p className="text-zinc-50 font-medium py-5">
          Encontre em nossa estante o que precisa para seu desenvolvimento!
        </p>
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
