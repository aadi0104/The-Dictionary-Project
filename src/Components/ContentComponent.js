import React, { useState, useEffect, useRef } from "react";
import './ContentComponent.css';
import DefinitionComponent from "./DefinitionComponent";
import ExampleComponent from "./ExampleComponent";

function Content() {

    const input = useRef();

    const [disp, SetDisp] = useState("none");

    const [searchData, SetsearchData] = useState("");

    const [meaningData, SetmeaningData] = useState("");

    const [title, SetTitle] = useState("The Dictionary Project");

    function clearsearch() {
        input.current.value = ""
    }

    useEffect(() => {
        document.title = `${title}`;
      });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchData}`);
                const newData = await response.json();
                try {
                    SetmeaningData(newData[0].meanings);
                } catch (error) {
                    window.alert(`${searchData} not found!`);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    });

    return (
        <div style={{ backgroundColor: "#00000D", border: "1px solid #00000D", height: "90vh" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "99%" }}>
                <div style={{ textAlign: "center" }} id="contentdiv">
                    <div>
                        <input type="text" placeholder="Enter Your Word !" name="search" ref={input} />
                        <button onClick={(e) => { SetDisp("block"); SetsearchData(input.current.value); SetTitle(`Word: ${input.current.value}`);}}>Search</button>
                    </div>
                    <div style={{ color: "white", textAlign: "right", marginRight: "45px", display: disp }}>
                        <p onClick={() => { SetDisp("none"); SetsearchData(""); clearsearch(); SetTitle("The Dictionary Project");}} style={{ cursor: "pointer" }}>
                            Clear Search?
                        </p>
                    </div>
                    <div style={{ borderTop: "2px solid white", padding: "15px" }}>
                        <div id="meaningdiv" style={{ display: disp }}>
                            <p><span>Word:</span> {searchData}</p>
                            <DefinitionComponent  mean = {meaningData}/>
                            <ExampleComponent mean = {meaningData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;