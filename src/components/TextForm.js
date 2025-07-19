import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(prop) {

  const [text,setText] = useState("Enter Your text");

  const upperCase = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("converted to uppercase","Success")
  }
  const lowerCase = () =>{
    let newText2 = text.toLowerCase();
    setText(newText2)
  }
  const handleOnchange = (event) =>{

    setText(event.target.value);

  }

  const clearText = () =>{
    setText("")
  }


const makeBold = () => {
  if (text.startsWith('<b>') && text.endsWith('</b>')) {
    // Remove <b> tags
    setText(text.replace(/^<b>(.*)<\/b>$/i, '$1'));
  } else {
    setText(`<b>${text}</b>`);
  }
};


  return (
    <>
    <div className='container'style={{color: prop.mode === 'dark'?'white':'black'}}>

            <h5>{prop.heading}</h5>
            <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnchange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={upperCase}>Covert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={lowerCase}>Covert to lowercase</button>

            <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
            
  
      
    </div>

    <div className="container my-5" style={{color: prop.mode === 'dark'?'white':'black'}} >

      <h1>Your Text Summery</h1>
       <p>
          Total : {text.split(" ").length} words and {text.length} characters.
      </p>

    <p>Read Time : { 0.008*text.split(" ").length} Minutes to read</p>

    <h3>Preview : </h3>
      <div dangerouslySetInnerHTML={{ __html: text }} />

  
    
    <button className="btn btn-primary mt-2" onClick={makeBold}>
        Bold
      </button>

    </div>

    </>
  )
}


TextForm.propTypes={
    heading : PropTypes.string
}