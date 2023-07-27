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
            <button type="button" className="btn btn-primary btn-lg" onClick={handleUpClick}>UpperCase</button>
            <button type="button" className="btn btn-primary btn-lg m-2" onClick={handleLowClick}>LowerCase</button>
            <button type="button" className="btn btn-primary btn-lg" onClick={handleCapClick}>Capitalize</button>
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
