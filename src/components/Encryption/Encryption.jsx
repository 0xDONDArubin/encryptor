import React, { useState } from 'react';
import "./Encryption.css";

function Encryption() {
  const [text, setText] = useState("");
  const [securityKey, setSecurityKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");

  const req = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "text": text
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_ENC_URL, requestOptions)
      .then(response => response.text())
      .then(result => getProps(result))
      .catch(error => console.log('error', error)); 
  }

  const getProps = (result) => {
    const securityKey = result.split('"')[3];
    const encryptedText = result.split('"')[7];
    setSecurityKey(securityKey);
    setEncryptedText(encryptedText);
  }
  
  return (
    <div className='encryption-block'>
      <h2 className='enc-title'>
        <span className='color'>Safe </span> 
        Encryptor
      </h2>
      
      <form method="post" action='#' onSubmit={e => req(e)} className='enc-form' autoComplete='off'>
        <textarea 
          type="text"
          className='text-to-enc' 
          id='text-to-enc' 
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='Input text to encrypt...'
          required>
        </textarea>
        
        <button className="enc-btn" type='submit'><span className='enc-btn-title'>Encrypt</span></button>

        <h1 className="key-block">Private key</h1>
        <textarea className='textarea-key-post' id='textarea-key-post' value={securityKey} readOnly></textarea>

        <h1 className="key-block">Encrypted text</h1>
        <textarea className='textarea-enc-text-post' id='textarea-completed-text-post' value={encryptedText} readOnly></textarea>
      </form>
    </div>
  )
} 

export default Encryption