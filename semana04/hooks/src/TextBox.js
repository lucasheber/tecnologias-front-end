import React from "react";
function TextBox(props) {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h3>{props.title}</h3>
            <textarea cols={70} rows={15} onChange={event => setCount(event.target.value.length)}></textarea>
            <p>{count} characters.</p>
        </div>
    );
}

export default TextBox;