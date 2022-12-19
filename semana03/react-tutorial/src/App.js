import './App.css';
import UsuarioEntrada from "./components/UsuarioEntrada";
import UsuarioSaida from "./components/UsuarioSaida";
import {useState} from "react";

function App() {
    const [user] = useState('');
    const me = "Lucas Heber de Oliveira Silva"
    return (
        <div className="App">
            <h1>Hello World!</h1>
            <UsuarioEntrada />
            <UsuarioSaida userName={me}/>
            <UsuarioSaida userName={user}/>
        </div>
    );
}

export default App;
