import React from 'react'
import "../App.css";
import "./css/NotFound.css";
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <div className='NotFound'>
        <img src="/images/Not-Found.png" alt="imagen pagina no encontrada" />
        
        <Link to="/" > Home </Link>
    </div>
  )
}

export default NotFound
