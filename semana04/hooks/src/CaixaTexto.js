import React from "react";
function CaixaTexto(props) {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h3>{props.title}</h3>
            <textarea cols={70} rows={15} onChange={event => setCount(event.target.value.length)}></textarea>
            <p>{count} caracteres.</p>
        </div>
    );
}

export default CaixaTexto;