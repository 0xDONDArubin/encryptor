import React, { useState } from 'react';
import "./Decryption.css";

function Decryption() {
  const [securityKey, setSecurityKey] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [res, setRes] = useState("");

  const req = (e) => {
    e.preventDefault();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "securityKey": securityKey,
      "encryptedText": encryptedText
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(process.env.REACT_APP_DEC_URL, requestOptions)
      .then(response => response.text())
      .then(result => {
        const a = result.substring(9).slice(0, -2);
        setRes(a.replace(/\\n/g, '\n'))
      })
      .catch(error => console.log('error', error)); 
  }

  return (
    <div className='decryption-block'>
      <h2 className='dec-title'>
        Decryptor
        <span className='color-dec'> Pro</span> 
      </h2>

      <form method="post" action='#' onSubmit={e => req(e)} className='dec-form' autoComplete='off'>
        <h1 className="key-block">Private key</h1>
        <textarea 
          type="text"
          className='textarea-key-get' 
          id='textarea-key-get' 
          placeholder='Input private key...'
          value={securityKey}
          onChange={e => setSecurityKey(e.target.value)}
          required>
          </textarea>
        
        <h1 className="key-block">Encrypted text</h1>
        <textarea 
          type="text"
          className='textarea-enc-text-get' 
          id='textarea-encrypted-text' 
          placeholder='Input encrypted text...'
          value={encryptedText}
          onChange={e => setEncryptedText(e.target.value)}
          required>
        </textarea>
        <button className="dec-btn" type="submit"><span className='dec-btn-title'>Decrypt</span></button>

        <h1 className="key-block">Decrypted text</h1>
        <textarea className='text-to-dec' id='textarea-completed-text-get' value={res} readOnly></textarea>
      </form>
    </div>
  )
}

export default Decryption