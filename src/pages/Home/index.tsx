import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Banner } from "../../components/Banner";
import { News } from "../../components/News";
import { CriarConta } from "./criar-conta";
import { Lancamentos } from "./lancamentos";
import { MaisVendidos } from "./mais-vendidos";


export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Lancamentos />
      <MaisVendidos />
      <CriarConta />
      <News />
      <Footer />
    </>
  );
}
