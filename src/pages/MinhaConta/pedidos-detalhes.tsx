import { AbBotao } from "ds-alurabooks-vitor";

export function PedidosDetalhes() {
    return (
        <div className="flex flex-col pb-20">
          <h1 className="font-bold text-2xl pb-5">Pedidos</h1>
          <div className="flex justify-between">
            <div className="flex flex-col pl-2">
              <ul>
                <li>
                  Pedido: <span className="font-bold">89019031</span>
                </li>
                <li>
                  Data do pedido: <span className="font-bold">26/05/2024</span>
                </li>
                <li>
                  Valor total: <span className="font-bold">R$ 102</span>
                </li>
                <li>
                  Entrega realizada em:{" "}
                  <span className="font-bold">01/06/2024</span>
                </li>
              </ul>
            </div>
            <div className="flex items-end">
              <AbBotao texto="Detalhes" tipo="primario" />
            </div>
          </div>
          <div className="py-10">
            <div className="bg-[#002F52] w-[1037px] h-px" />
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col pl-2">
              <ul>
                <li>
                  Pedido: <span className="font-bold">89019031</span>
                </li>
                <li>
                  Data do pedido: <span className="font-bold">26/05/2024</span>
                </li>
                <li>
                  Valor total: <span className="font-bold">R$ 102</span>
                </li>
                <li>
                  Entrega realizada em:{" "}
                  <span className="font-bold">01/06/2024</span>
                </li>
              </ul>
            </div>
            <div className="flex items-end">
              <AbBotao texto="Detalhes" tipo="primario" />
            </div>
          </div>
        </div>
    )
}