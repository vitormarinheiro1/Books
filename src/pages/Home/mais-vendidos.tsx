import lancamento1 from "../../assets/lancamento1.png";
import lancamento2 from "../../assets/lancamento2.png";
import lancamento3 from "../../assets/lancamento3.png";
import { AbBotao, AbCard } from "ds-alurabooks-vitor";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export function MaisVendidos() {
  return (
    <div>
      <h1 className="flex justify-center text-2xl font-bold text-[#EB9B00] pt-10 pb-4">
        MAIS VENDIDOS
      </h1>
      <div className="bg-[#EBECEE] py-12 flex justify-center items-center gap-10">
        <div className="flex items-center gap-6">
          <img
            className="w-44 h-64"
            src={lancamento1}
            alt="Capa do livro Apache Kafka e Spring Boot"
          />
          <img
            className="w-64"
            src={lancamento3}
            alt="Capa do livro JavaScript Assertivo"
          />
          <img
            className="w-44 h-64"
            src={lancamento2}
            alt="Capa do livro Liderança em Design"
          />
        </div>
        <div>
          <AbCard>
            <div className="flex items-center gap-4">
              <h1 className="font-bold text-[#EB9B00] text-3xl pr-48">
                Sobre o livro:
              </h1>
              <MdOutlineShoppingBag size={28} color="#002F52" />
              <FaRegHeart size={24} color="#002F52" />
            </div>
            <div>
              <h1 className="font-bold text-[#002F52] text-xl py-6">
                JavaScript Assertivo
              </h1>
              <p className="font-normal text-sm pb-2">
                Testes e qualidade de código em todas as camadas da aplicação
              </p>
              <p className="font-normal text-sm pb-10">Por: Gabriel Ramos</p>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="font-normal text-sm text-zinc-500">
                  A partir de:
                </p>
                <p className="font-bold text-[#002F52] text-4xl">R$ 29,90</p>
              </div>
              <AbBotao texto="Comprar" tipo="primario" />
            </div>
          </AbCard>
        </div>
      </div>
    </div>
  );
}
