import NavBar from "../../components/NavBar"
import bild from '../../images/coding.jpg'
import '../../styles/aufgabe1.css';
export const Aufgabe1 = () => {
  return (
    <div className="aufgabe1-container-css">
    <h1>Willkommen zu deiner Aufgabe1</h1>
    <p>In dieser Aufgabe, wiederholst du einiges was wir bis jetzt geschaft haben.<br></br></p>
    <h3>Erstelle eine Webseite </h3>
    <p>Erstelle eine Webseite auf der du verschiedene Überschriffen Typen und Farben benutzt.<br></br>
       Erstelle eine Liste mit deinen Lieblingsfächern <b>(mindestens 2). </b>
       Erstelle eine Überschrift mit einen Absatz, <br></br>in dem du beschreibst was du an stumble guys magst und was stumble guys ist.
       <br></br>Du kannst dir diese Webseite als Beispiel nehmen oder deine ganz eigene Bauen.
       <br></br>Als Zusatzaufgabe: kannst du deine Lieblingswebseite und Video wieder mit einen link und oder Bild verlinken.
       <br></br><b>Viel Spaß!</b></p>
      
    <h4>Folgene Dinge wirst du brauchen.</h4>
    <ol>
      <li>p-Tag</li>
      <li>a-Tag</li>
      <li>h1-h3-Tag</li>
      <li>img Tag</li>
      <li>ol/li Tag</li>
      <li>style</li>
    </ol>
    <p>
      Erlaubte Hilfsmittel <a href="https://wiki.selfhtml.org/wiki/HTML">wiki.selfhtml</a>
    </p>

    <p>
      Du kannst auf das Bild klicken{' '} <br></br>
      <a href="/home">
        <img src={bild} className="aufgaben-bild-css" alt="Bildlink" />
      </a>{' '}
    </p>
    <button>Aufgabe bestanden</button>
  </div>
  )
}
