import React from "react";

function ExampleComponent(props) {
    if (props.mean === "") {
        return (
            <p><span>Example:</span></p>
        );

    }
    else {
        const searchdata = props.mean[0].definitions;
        const ex = <li>{searchdata[0].example}</li>

        if (searchdata[0].example !== undefined) {
            return (
                <p><span>Example:</span>{ex}</p>
            );
        }

    }
}

export default ExampleComponent;