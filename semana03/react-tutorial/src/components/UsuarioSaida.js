import React, { Component } from 'react'

class UsuarioSaida extends Component {
    render() {
        const userName = this.props.userName
        return (
            <div className="saida">
                <p>
                    {userName}
                </p>
                <p>
                    Paragrafo qualquer
                </p>
            </div>
        )
    }
}

export default UsuarioSaida