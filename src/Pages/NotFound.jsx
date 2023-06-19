import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";
import "../styles/pages/NotFound.css";

function NotFound(props) {
  return (
    <div className='NotFound'>
        <img src="/images/Not-Found.png" alt="imagen pagina no encontrada" />
        
        <Link to="/" > Home </Link>
    </div>
  )
}

export default NotFound
