import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { MinhaConta } from "./pages/MinhaConta";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/minha-conta/pedidos",
    element: <MinhaConta />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />
}