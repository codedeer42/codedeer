import bild from '../../images/guy.png'
import '../../styles/aufgabe1.css';
import { Hammer  } from 'react-bootstrap-icons';
import { ArrowLeftSquare  } from 'react-bootstrap-icons';
export const Aufgabe2 = () => {
  return (

    <div class="container content-justefy-center text-center m-1">
    <h1 class="mt-3">Willkommen zu deiner zweiten Aufgabe</h1>
    <div class="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-8  row-cols-lg-10 row-cols-xl-10">
        <div class="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10  ">
        <dl class="row">
          <dt class="p-2 col-sm-3 fs-4 text">Webseite erstellen:</dt>
          <dd class="col-sm-9 fs-5 text text-start">Vergleiche deine Webseite aus dem Abenteuer1 mit dieser 
          <a className='mx-2' href='/codedeer/#aufgaben'>Beispielwebseite.</a>
                               Hast du die selben Elemente verwendet wie in der Liste 1-6 vorgeschlagen?
                               Sieht deine Webseite ähnlich aus? Prima! Dann lass und weiter machen!<br></br>
                               <a  href='/codedeer/#aufgabeh'>Hilfe</a>
          </dd>
          <dt class="col-sm-3 fs-4 text">Elemente zentrieren:</dt>
          <dd class="col-sm-9 fs-5 text text-start">Prima! machen wir weiter! Jetzt Zentrieren wir die Elemente in der Mitte,
          und wiederholen wir was wir bis jetzt gemacht haben!
          Hier sind deine Werkzeuge  <a href=''>(klick mich) <Hammer/>.</a> 
          Erstelle eine neue HTML-Seite, auf der eine Überschrift und ein Text steht.
          In etwa <a style={{textDecoration:'none'}} href=''>(so) <ArrowLeftSquare/>.</a> ! Richte den Text in der Mitte aus, mache ein paar Wörter fett.
          Und benutze das span Element/Tag um den aller ersten Buchstaben groß und fett zu machen!
          </dd>
        </dl>
        </div>
        <div class="col  col-md-2 col-lg-2 col-xl-2  ">
            <img src={bild} class="rounded img-thumbnail"></img>
        </div>
    </div>
    <button>Aufgabe bestanden</button>
    </div>
  )
}
