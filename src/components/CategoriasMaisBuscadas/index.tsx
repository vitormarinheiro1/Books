import { AbTag } from "ds-alurabooks-vitor";

export function CategoriasMaisBuscadas() {
  return (
    <div className="bg-gradient-to-r to-[#326589] from-[#002F52] pb-20 flex flex-col items-center">
      <h1 className="text-zinc-50 pt-20 pb-16 font-light text-3xl">CATEGORIAS MAIS BUSCADAS</h1>
      <div className="flex flex-col gap-6">
        <div className="flex gap-6">
          <AbTag texto="Android" />
          <AbTag texto="OO" />
          <AbTag texto="Marketing Digital" />
          <AbTag texto="Agile" />
        </div>
        <div className="flex gap-6">
          <AbTag texto="Startups" />
          <AbTag texto="HTML & CSS" />
          <AbTag texto="Java" />
          <AbTag texto="Python" />
        </div>
      </div>
    </div>
  );
}
