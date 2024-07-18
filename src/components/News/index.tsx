import { MdOutlineMail } from "react-icons/md";

export function News() {
  return (
    <div className="py-14 flex justify-center items-center gap-16">
      <div className="flex flex-col">
        <h1 className="font-medium text-2xl text-[#002F52] pb-2">
          Fique por dentro das novidades!
        </h1>
        <p className="text-[#002F52]">
          Atualizações de e-books, novos livros,
          <br /> promoções e outros.
        </p>
      </div>
      <button className="flex items-center gap-2 px-16 py-2 border border-gray-950 rounded-full hover:bg-gray-200 ">
        <MdOutlineMail size={24} />
        Cadastre seu e-mail
      </button>
    </div>
  );
}
