import React, { useState } from "react";
export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpOnClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case", "success");
        
    };
    const handleLoOnClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    };
    const handleClearOnClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Cleared Text", "success");
    };
    const handleCopyOnClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied To Clipboard", "success");
        document.getSelection().removeAllRanges();
    };
    const handleExtraSpaces = () => {
        let textSplit = text.split(/[ ]+/);
        setText(textSplit.join(" "));
        props.showAlert("Cleared Extra spaces", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const words = () => {
        return text.split(/\s+/).filter((word) => word.length !== 0).length;
    };
    const sent = () => {
        if (text.endsWith(".")) {
            return text.split(".").length - 1;
        }
        if (text.length === 0) {
            return 0;
        } else {
            return text.split(".").length;
        }
    };

    const colorBtn = (color) =>
    {
        if(color==="light")
        {
            return "secondary";
        }
        else if(color==="blueDark")
        {
            return "primary";
        }
        else if(color==="redDark")
        {
            return "danger"
        }
        else if(color==="greenDark")
        {
            return "success"
        }
    }

    const textBoxCol = (color) =>
    {
        if(color==="light")
        {
            return "#d1d1d1";
        }
        else if(color==="blueDark")
        {
            return "#040477";
        }
        else if(color==="redDark")
        {
            return "#770404"
        }
        else if(color==="greenDark")
        {
            return "#047704"
        }
    }
    return (
        <>
            <div
                style={{ color: props.mode === "light" ? "black" : "white" }}
            >
                <h1 className="mb-4">
                    <label htmlFor="box">{props.heading}</label>
                </h1>
                <textarea
                    className="form-control"
                    id="box"
                    rows="8"
                    value={text}
                    onChange={handleOnChange}
                    style={{color: (props.mode==="light")?"black":"white", backgroundColor: textBoxCol(props.mode)}}
                ></textarea>

                <button
                    className={`btn btn-${colorBtn(props.mode)} m-2`}
                    id="btn1"
                    onClick={handleUpOnClick} disabled={text.length===0}
                >
                    Change to Upper Case
                </button>
                <button
                    className={`btn btn-${colorBtn(props.mode)} m-2`}
                    id="btn2"
                    onClick={handleLoOnClick} disabled={text.length===0}
                >
                    Change to Lower Case
                </button>
                <button
                    className={`btn btn-${colorBtn(props.mode)} m-2`}
                    id="btn3"
                    onClick={handleClearOnClick} disabled={text.length===0}
                >
                    Clear
                </button>
                <button
                    className={`btn btn-${colorBtn(props.mode)} m-2`}
                    id="btn4"
                    onClick={handleCopyOnClick} disabled={text.length===0}
                >
                    Copy Text
                </button>
                <button
                    className={`btn btn-${colorBtn(props.mode)} m-2`}
                    id="btn5"
                    onClick={handleExtraSpaces} disabled={text.length===0}
                >
                    Remove extra spaces
                </button>
            </div>
            <div className="container" style={{color: (props.mode==="light")?"black":"white"}}>
                <h1>Text Summary:</h1>
                <p>
                    {sent()} sentences, {words()} words and {text.length} characters
                </p>
                <p>{0.008 * words()} minutes to read </p>
                <h2>Text Preview:</h2>
                <p>{(text.length>0)?text:"Nothing to Preview"}</p>
            </div>
        </>
    );
}
