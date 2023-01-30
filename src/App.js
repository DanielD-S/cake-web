import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom"

import Home from './Components/Navbar';
import Body from './Components/Body';
import Formulario from './Components/Form';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home></Home>
        <Routes>
          <Route path="/" element={<Body/>} />
          <Route path="/contacto" element={<Formulario/>} />
        </Routes>
        
        
      </BrowserRouter>


    </div>
  );
}

export default App;
