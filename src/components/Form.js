import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as bootstrap from 'bootstrap/dist/js/bootstrap'

export default function Form(props) {

    const onChangeTextHandle = (event) => {
        console.log("Text Changed");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        console.log("Uppercase Clicked");
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCapClick = () => {
        const arr = text.split(" ");
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        let newText = arr.join(" ");
        setText(newText);
    }
    const handleAlternateClick = () => {
        const arr = text.split(" ");
        let newText = ""
        for (let i = 0; i < arr.length; i++) {
            let word = "";
            for (let j = 0; j < arr[i].length; j++) {
                if ((j & 1) === 0) word += arr[i][j].toLowerCase();
                else word += arr[i][j].toUpperCase();
            }
            if (i === arr.length - 1) newText += word;
            else newText += word + " ";
        }
        setText(newText);
    }
    const handleInverseClick = () => {
        const arr = text.split(" ");
        let newText = ""
        for (let i = 0; i < arr.length; i++) {
            let word = "";
            for (let j = 0; j < arr[i].length; j++) {
                if ((j & 1) === 1) word += arr[i].charAt(j).toLowerCase();
                else word += arr[i].charAt(j).toUpperCase();
            }
            if (i === arr.length - 1) newText += word;
            else newText += word + " ";
        }
        setText(newText);
    }


    const handleClearClick = () => {
        setText("");
        console.log("Clear Clicked");
    }

    const findWords = () => {
        let arr = text.trim().split(" ");
        let wordCount = arr.length;
        if (arr[0] === '') wordCount--;
        return wordCount;
    }

    // For the toast of copy to clipboard
    const toastTrigger = document.getElementById('copyText')
    const toastLiveExample = document.getElementById('liveToast')

    if (toastTrigger) {
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastTrigger.addEventListener('click', () => {
            toastBootstrap.show()
        })
    }

    const [text, setText] = useState("")
    return (
        <>
            <h1 className="text-centre">Text Utilities Software</h1 >
            <hr />
            <div className="d-flex justify-content-between">
                <div>
                    <h2>{props.titleText}</h2>
                </div>
                <div>
                    <CopyToClipboard text={text}>
                        <button className="btn btn-primary" id="copyText">Copy Text</button>
                    </CopyToClipboard>
                </div>
            </div>

            <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header">
                        <strong className="me-auto">Text Utils</strong>
                        <small>Just Now</small>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Copied to clipboard!
                    </div>
                </div>
            </div>

            <div className="mb-2">
                <textarea className="form-control" id="text" placeholder='Enter the text here' value={text} onChange={onChangeTextHandle} rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleUpClick}>UPPER CASE</button>
            <button type="button" className="btn btn-primary btn-lg mx-2" onClick={handleLowClick}>lower case</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleCapClick}>Capitalize Case</button>
            <button type="button" className="btn btn-primary btn-lg mx-2" onClick={handleAlternateClick}>aLtErNaTiNg cAsE</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleInverseClick}>InVeRsE CaSe</button>
            <button type="button" className="btn btn-primary btn-lg mx-2" onClick={handleClearClick}>Clear Text</button>
            <a className="btn btn-primary btn-lg " href="https://bmc.link/olifarhaan" role="button">Buy Me Coffee</a>
            <div className="card my-2">
                <div className="card-body">
                    <b>{findWords()}</b> words, <b>{text.length}</b> characters, <b>{(findWords() * 0.008).toFixed(2)}</b> min reading time
                </div>
            </div>
            <h2>Preview</h2>
            <div className="card my-3">
                <div className="card-body">
                    {text}
                </div>
            </div>
        </>
    )
}
