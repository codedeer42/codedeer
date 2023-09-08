import StyledLink from "../../components/StyledLink"
import bild from '../../images/coding.jpg'
import '../../styles/aufgabe1.css';
export const Aufgabe2h = () => {
  return (
    <div className="aufgabe1-container-css container   m-3">
    <div className="row">
      <h4 className="bg-primary">Deine Werkzeuge</h4>
      <div className="row">
        <div className="col-2">
          <ol className="m-3"> 
          <li><StyledLink text="Grundlagen" onClick={() => console.log("Klick auf Grundlagen")} /></li>
          <li><StyledLink text="p-Tag" onClick={() => console.log("Klick auf p-Tag")} /></li>
          <li><StyledLink text="a-Tag" onClick={() => console.log("Klick auf a-Tag")} /></li>
          <li><StyledLink text="h1-h6" onClick={() => console.log("Klick auf Grundlagen")} /></li>
          <li><StyledLink text="img-Tag" onClick={() => console.log("Klick auf p-Tag")} /></li>
          <li><StyledLink text="listen-Tag" onClick={() => console.log("Klick auf a-Tag")} /></li>
          <li><StyledLink text="style" onClick={() => console.log("Klick auf a-Tag")} /></li>
          </ol>
        </div>
        <div className="col-10 bg-danger">
          <p>{text}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
