import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Borracharia from "../pages/Borracharia";
import Sorveteria from "../pages/Sorveteria";
import Bar from "../pages/Bar";


const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/BorrachariaTiao", element: <Borracharia />},
    {path: "/SorveteriaTiao", element: <Sorveteria />},
    {path: "/BarTiao", element: <Bar />},
])

export default router;