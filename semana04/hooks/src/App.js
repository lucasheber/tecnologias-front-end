import './App.css';
import CaixaTexto from "./CaixaTexto";
import {useState} from "react";

function App() {

    const [user, setUser] = useState({
        logged: false
    });

    const show = () => {
        console.log(user.logged)
        setUser({logged: true});
    }

    const hide = () => {
        console.log(user.logged)
        setUser({logged: false});
    }

    return (
        <div className="App">
            <header className="App-header">
                {
                    user.logged ?
                        <div>
                            <CaixaTexto title={"Digite a mensagem de boas vindas!"}/>
                            <button className="btn_logout" onClick={hide}>Logout</button>
                        </div>
                        :
                        <div>
                            <h4>Você deve estar logado para digitar a mensagem..</h4>
                            <button className="btn_login" onClick={show}>Login</button>
                        </div>
                }
            </header>
        </div>
    );
}


export default App;
