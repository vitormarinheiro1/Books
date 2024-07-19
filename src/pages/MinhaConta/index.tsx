import { Header } from "../../components/Header";
import { CategoriasMaisBuscadas } from "../../components/CategoriasMaisBuscadas";
import { News } from "../../components/News";
import { Footer } from "../../components/Footer";
import { MenuPedidos } from "./menu-pedidos";
import { PedidosDetalhes } from "./pedidos-detalhes";

export function MinhaConta() {
  return (
    <>
      <Header />
      <div className="bg-gradient-to-r to-[#326589] from-[#002F52] flex justify-center items-center py-12">
        <p className="text-zinc-50 font-bold text-3xl">Minha conta</p>
      </div>
      <div className="flex justify-center py-48 gap-20">
      <MenuPedidos />
      <PedidosDetalhes />
      </div>

      <CategoriasMaisBuscadas />

      <News />

      <Footer />
    </>
  );
}
