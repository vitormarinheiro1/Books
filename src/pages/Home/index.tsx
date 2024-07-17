import { Header } from "../../components/Header";
import { Banner } from "../../components/Menu";
import { CriarConta } from "./criar-conta";
import { Lancamentos } from "./lancamentos";
import { MaisVendidos } from "./mais-vendidos";
import { Novidades } from "./novidades";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Lancamentos />
      <MaisVendidos />
      <CriarConta />
      <Novidades />
    </>
  );
}
