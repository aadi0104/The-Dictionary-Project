import React from "react";

function DefinitionComponent(props) {

    if (props.mean === "") {
        return (
            <p><span>Definition:</span></p>
        );

    }
    else {

        const searchdata = props.mean[0].definitions;

        const data = [];

        if (searchdata.length >= 3) {
            for (let i = 0; i < 3; i++) {
                data.unshift(<li>{searchdata[i].definition}</li>)
            }
        }

        else {
            for (let i = 0; i < searchdata.length; i++) {
                data.unshift(<li>{searchdata[i].definition}</li>)
            }
        }

        return (
            <p><span>Definition:</span>{data}</p>
        );
    }
}

export default DefinitionComponent;