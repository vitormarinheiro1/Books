import { MenuPedidos } from "./menu-pedidos";
import { PedidosDetalhes } from "./pedidos-detalhes";

export function PedidosContainer() {
  return (
    <div className="flex justify-center py-48 gap-20">
      <MenuPedidos />
      <PedidosDetalhes />
    </div>
  );
}
