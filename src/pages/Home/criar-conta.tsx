import { AbBotao } from "ds-alurabooks-vitor";

export function CriarConta() {
    return (
        <div className="bg-gradient-to-r from-[#002F52] to-[#326589] py-14 flex justify-center items-center gap-16">
            <div className="flex flex-col">
                <h1 className="font-medium text-2xl text-zinc-50 pb-2">Já possui uma conta?</h1>
                <p className="text-zinc-50">Com um conta você pode criar sua <br/> própria estante de livros e e-books.</p>
            </div>
            <div className="flex gap-2">
                <AbBotao
                texto="Criar Conta"
                tipo="secundario"
                />
                <AbBotao
                texto="Fazer Login"
                tipo="primario"
                />
            </div>
        </div>
    )
}