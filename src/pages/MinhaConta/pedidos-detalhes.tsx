import axios from "axios";
import { AbBotao } from "ds-alurabooks-vitor";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces/IPedido";
import { MdDelete } from "react-icons/md";

export function PedidosDetalhes() {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);

  const formatador = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get<IPedido[]>("http://localhost:8000/pedidos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resposta) => setPedidos(resposta.data))
      .catch((error) => console.log(error));
  }, []);

  const excluir = (pedido: IPedido) => {
    const token = sessionStorage.getItem("token");
    axios
      .delete("http://localhost:8000/pedidos/" + pedido.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resposta) => setPedidos(resposta.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col pb-20">
      <h1 className="font-bold text-2xl pb-5">Pedidos</h1>
      {pedidos.map((pedido) => (
        <div key={pedido.id}>
          <div className="flex justify-between">
            <div className="flex flex-col pl-2">
              <ul>
                <li>
                  Pedido: <span className="font-bold">{pedido.id}</span>
                </li>
                <li>
                  Data do pedido:{" "}
                  <span className="font-bold">
                    {new Date(pedido.data).toLocaleDateString()}
                  </span>
                </li>
                <li>
                  Valor total:{" "}
                  <span className="font-bold">
                    {formatador.format(pedido.total)}
                  </span>
                </li>
                <li>
                  Entrega realizada em:{" "}
                  <span className="font-bold">
                    {new Date(pedido.data).toLocaleDateString()}
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-6">
              <button onClick={() => excluir(pedido)}>
                <MdDelete size={36} color="red" />
              </button>
              <div className="flex items-end">
                <AbBotao texto="Detalhes" tipo="primario" />
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="bg-[#002F52] w-[1037px] h-px" />
          </div>
        </div>
      ))}
    </div>
  );
}
