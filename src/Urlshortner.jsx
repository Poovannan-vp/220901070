import React, { useState } from 'react';
import { useEffect } from 'react';
import "./App.css";

function UrlShortner(){
    const [url,setUrl]=useState([])
    const [error,setError]=useState('')

    const handleClick=(url)=>{
        setUrl();
        setError('Error happend while generating short url');
    }
    const NewUrl={
        url:url
    }
    return(
        <div className='container'>
            <header className='header'>
                <strong>URL SHORTNER</strong>
            </header>
            <form className='form'>
                <input type='text' placeholder='enter the url' onSubmit={handleClick}>
                </input>
            </form>
            <button className='button' onClick={handleClick}>generate url</button>
            <p>{url}</p>
        </div>
    );
}
export default UrlShortner;