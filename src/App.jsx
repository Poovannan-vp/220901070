import { useState } from 'react';
import { useEffect } from 'react';
import Axios from "axios";
import './App.css';
import axios from 'axios';
import UrlShortner from './Urlshortner';

function App() {
  const [user, setUser] = useState([])
  const [error,setError]=useState("")
  
  // useEffect(()=>{

  // })

  return (
    <>
    <UrlShortner/>
    </>
  )
}

export default App
