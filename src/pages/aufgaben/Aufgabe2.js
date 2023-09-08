import bild from '../../images/guy.png'
import '../../styles/aufgabe1.css';
export const Aufgabe2 = () => {
  return (

    <div class="container text-center">
    <h1 class="mt-3">Willkommen zu deiner zweiten Aufgabe</h1>
    <div class="mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-4  row-cols-lg-10 row-cols-xl-12">
        <div class="col-12 col-sm-6 col-md-6 col-lg-10 ">
        <dl class="row">
          <dt class="col-sm-3 fs-4 text">Webseite erstellen:</dt>
          <dd class="col-sm-9 fs-5 text text-start">Vergleiche deine Webseite mit dieser 
          <a className='mx-2' href='/codedeer/#aufgaben'>Beispielwebseite.</a>
                               Hast du die selben Elemente verwendet wie in der Liste 1-6 vorgeschlagen?
                               Sieht deine Webseite ähnlich aus? Prima! Dann lass und weiter machen!<br></br>
                               <a  href='/codedeer/#aufgaben'>Hilfe</a>
          </dd>
          <dt class="col-sm-3 fs-4 text">Elemente zentrieren:</dt>
          <dd class="col-sm-9 fs-5 text text-start">Vergleiche deine Webseite mit dieser 
          <a className='mx-2' href='/codedeer/#aufgaben'>Beispielwebseite.</a>
                               Hast du die selben Elemente verwendet wie in der Liste 1-6 vorgeschlagen?
                               Sieht deine Webseite ähnlich aus? Prima! Dann lass und weiter machen
          </dd>
        </dl>
        </div>
        <div class="col-12 col-md-3 col-lg-2">
            <img src={bild} class="rounded img-thumbnail"></img>
        </div>
    </div>
    <button>Aufgabe bestanden</button>
    </div>
  )
}
