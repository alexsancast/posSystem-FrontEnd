import { Login } from "./pages/Login";
import Prueba from "./pages/prueba.jsx";
import Test from "./pages/Test";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RiLayoutMasonryFill } from "react-icons/ri";
import Rutas from "./routes/route"


function App()
{



  // return <Login />;
  return  ( 
    <BrowserRouter>
     <Rutas/> 
    </BrowserRouter>
  )

}

export default App;
