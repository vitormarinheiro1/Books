import { Header } from "../../components/Header";
import { Banner } from "../../components/Menu";
import { Lancamentos } from "./lancamentos";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Lancamentos />
    </>
  );
}
