import { Header } from "../../components/Header";
import { CategoriasMaisBuscadas } from "../../components/CategoriasMaisBuscadas";
import { News } from "../../components/News";
import { Footer } from "../../components/Footer";
import { BannerMinhaConta } from "./banner-minha-conta";
import { PedidosContainer } from "./pedidos-container";

export function MinhaConta() {
  return (
    <>
      <Header />
      <BannerMinhaConta />
      <PedidosContainer />
      <CategoriasMaisBuscadas />
      <News />
      <Footer />
    </>
  );
}
