import React, { useState } from 'react';
import StyledLink from "../../components/StyledLink"
import bild from '../../images/coding.jpg'
import '../../styles/aufgabe1.css';
export const Aufgabe1h = () => {
  const [inhalt,setInhalt] = useState("");
  return (
    <div className="container">
    <div className="row">
      <h4  style={{textAlign:'center',marginTop:'10px'}} className="bg-primary">Deine Werkzeuge</h4>
      <div className="row ">
        <div className="col-sm-12 col-md-3" style={{textAlign:'center'}}>
          <ol> 
          <li><StyledLink text="Grundlagen" onClick={() => {setInhalt("<h1>test<h1A")}} /></li>
          <li><StyledLink text="p-Tag" onClick={() => console.log("Klick auf p-Tag")} /></li>
          <li><StyledLink text="a-Tag" onClick={() => console.log("Klick auf a-Tag")} /></li>
          <li><StyledLink text="h1-h6" onClick={() => console.log("Klick auf Grundlagen")} /></li>
          <li><StyledLink text="img-Tag" onClick={() => console.log("Klick auf p-Tag")} /></li>
          <li><StyledLink text="listen-Tag" onClick={() => console.log("Klick auf a-Tag")} /></li>
          <li><StyledLink text="style" onClick={() => console.log("Klick auf a-Tag")} /></li>
          </ol>
        </div>
        <div className="col-12 col-sm-12  col-md-9 bg-danger " style={{ wordWrap: 'break-word',textAlign:'center' }}>
          <p>createdCOMPONENT{inhalt}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
