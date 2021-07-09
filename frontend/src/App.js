
import Rotas from "./Rotas/Rotas"
import { BrowserRouter } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Rotas />
        </BrowserRouter>
    </div>
  );
}

export default App;
