import React, {useState} from 'react'

function UsuarioEntrada() {

    const [user, setUser] = useState('');

    return (
        <div>
            <input type="text" value={user}  name="user" onChange={e => setUser(e.target.value)}/>
        </div>
    )
}

export default UsuarioEntrada