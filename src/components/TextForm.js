import React, { useState } from 'react'


export default function TextForm(props) {

    const handUpClick = () =>{
        console.log("Uppercase was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
 }

    const handloClick = () =>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success");
    }

    const handclearClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Clear Text!","success");
    }

    //Capital every letter of every word
    const handcapitalClick = () =>{
        //console.log("Uppercase was clicked" + text);
        
        function toTitleCase(str) {
            return str.replace(/[^-'\s]+/g, function(word) {
                return word.replace(/^./, function(first) {
                return first.toUpperCase();
                });
            });
        }
        let newText = toTitleCase(text);
        setText(newText)
        props.showAlert("Converted to Capital Text!","success");
    }

    
    const handtitleClick = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Converted to titlecase!","success");
    }

    const handCopy = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        //setText(newText);
        props.showAlert("Copy text!","success");
    }

    // const handExtraSpace = () =>{
    //     //console.log("Uppercase was clicked" + text);
    //     let newText = text.split(/[]+/);
    //     setText(newText.join(" "));
    // }
    const handRemoveSpace = () =>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.replace(/\s+/g,' ').trim();
        setText(newText)
        props.showAlert("Remove extra spaces!","success");
    }



    const handleOnChange = (event) =>{
        console.log("on changed");
        setText(event.target.value);
    }

    
    const [text, setText] = useState('');
    //text = "new text"; //wrong way of change the state
    //setText("new text")  //correct way of change the state
    return (
        <>
        
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
             <h1>{props.heading}</h1>
             <div className="mb-3">
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'light', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
             </div>
             <button className="btn btn-primary mx-2" onClick={handUpClick}>Convert to Uppercase</button>
             <button className="btn btn-primary mx-2" onClick={handloClick}>Convert to lowercase</button>
             <button className="btn btn-primary mx-2" onClick={handclearClick}>Clear text</button>
             <button className="btn btn-primary mx-2" onClick={handcapitalClick}>Captilized </button>
             <button className="btn btn-primary mx-2" onClick={handtitleClick}>Title </button>
             <button className="btn btn-primary mx-2" onClick={handCopy}>Copy text </button>
             {/* <button className="btn btn-primary mx-2" onClick={handExtraSpace}>Remove Extra Space </button> */}
             <button className="btn btn-primary mx-2" onClick={handRemoveSpace}>Remove Extra Space </button>
        </div>

        <div className="container my-3 " style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        {/* <p>{text.split(" ").length} words and {text.length} charcters</p> */}
        <p> {text.length > 0?text.trim().split(" ").length:0} words and {text.length} charcters</p>
        <p>{ (0.008 * text.split(" ").length)} Minutes read</p>
        <h2>Preview</h2>

        <p>{text.length > 0 ?text:"Enter something in the text box to preview it here"}</p>

        </div>
        </>
    )
}
