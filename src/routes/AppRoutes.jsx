import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../Layout";
import Perfil from "../pages/Perfil";
import Carrinho from "../pages/Carrinho";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/perfil",
                element: <Perfil></Perfil>
            },
            {
                path: "/carrinho",
                element: <Carrinho></Carrinho>
            }
        ]
    }
])