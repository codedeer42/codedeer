import React from 'react';
import cardPic from '../images/html.jpg'

export const HTML = () => {

  const handleSelecting = (pageURL) => {

   window.location.href = "#" + pageURL; 
  }

  return (
  <div className='container m-0 mt-3'>
    <div className='row m-1'>
      <div  onClick={()=>{handleSelecting("/aufgaben")}}  className="card me-3"  style={{width:"18rem", cursor:'pointer'}}>
      <img src={cardPic} className="card-img-top" alt="..."></img>
      <div  className="card-body">
        <h5 className="card-title">Abenteuer1</h5>
        <p className="card-text">Erstelle HTML-ELEMENTE.</p>
        <a href="/codedeer/#aufgaben" className="btn btn-primary">Los geht's!</a>
      </div>
     </div>
      <div  onClick={()=>{handleSelecting("/aufgabe2")}}  className="card"  style={{width:"18rem", cursor:'pointer'}}>
        <img src={cardPic} className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Abenteuer2</h5>
          <p className="card-text">Zentriere HTML-ELEMENTE.</p>
          <a href="/codedeer/#aufgabe2" className="btn btn-primary">Los geht's!</a>
        </div>
      </div>
    </div>
    https://codemirror.net/
  </div>
  )
}
