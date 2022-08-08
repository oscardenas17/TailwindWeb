import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Play from "./pages/Play";

function App() {
  return (
    <div className=" bg-lime-500">
       
     <BrowserRouter>
     
        <Navbar />
        <Routes>
         <Route path='/' element={<Home greeting='Listado de todos los productos'/>}/>
         <Route path='/play' element={<Play  />} />  
          <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
        </Routes>
   
    </BrowserRouter> 
    </div>
  );
}

export default App;
