import React from 'react'
import { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("");
  const clickUp = () => {
    let newText = text.toUpperCase();
    setText(newText);
    if (text.length >= 1) {
      props.showAlert("Text has been converted to Uppercase", "success");
    }
   
  }
  const clickLow = () => {
    let newText = text.toLowerCase();
    setText(newText);
    if (text.length >= 1) {
      props.showAlert("Text has been converted to Lowercase", "success");
    }
  }
  const clickClear = () => {
    let newText = "";
    setText(newText);
    if (text.length >= 1) {
      props.showAlert("Text has been Cleared", "success");
    }
  }
  const handleChange = (event) => {
    setText(event.target.value);
  }
  return (
    <>
      <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
        <h2>Try TextUtiles - Convert text to uppercase or lowercase. </h2>
        <textarea className={` form-control bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='light'?'dark':'light'}`} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clickUp}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clickLow} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={clickClear} >Clear Text</button>
      </div>
      <div className={`container text-${props.mode==='light'?'dark':'light'} my-3`}>
        <h3>Text Summary</h3>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>

  )
}
