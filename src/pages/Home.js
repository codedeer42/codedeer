import React from 'react';
import cardPic from '../images/html.jpg'
import java from '../images/java.png'

export const Home = () => {

  const handleSelecting = (pageURL) => {

   window.location.href = "#" + pageURL; 
  }

  return (
  <div className='container m-0 mt-3'>
    <div className='row m-1'>
      <div  onClick={()=>{handleSelecting("/html")}}  className="card me-3"  style={{width:"18rem", cursor:'pointer'}}>
      <img src={cardPic} className="card-img-top" alt="..."></img>
      <div  className="card-body">
        <h5 className="card-title">HTML/CSS</h5>
        <p className="card-text">Erstelle HTML-ELEMENTE.</p>
        <a href="/codedeer/#aufgaben" className="btn btn-primary">Los geht's!</a>
      </div>
     </div>
      <div  onClick={()=>{handleSelecting("/java")}}  className="card"  style={{width:"18rem", cursor:'pointer'}}>
        <img src={java} className="card-img-top mt-5 mb-3" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title mt-3">Java</h5>
          <p className="card-text">Zentriere HTML-ELEMENTE.</p>
          <a href="/codedeer/#aufgabe2" className="btn btn-primary">Los geht's!</a>
        </div>
      </div>
    </div>
    https://codemirror.net/
  </div>
  )
}
