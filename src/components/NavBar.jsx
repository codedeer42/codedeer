
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#/home">Codedeer</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="../html/aufgabe1.html">YouTube</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/codedeer/#quiz">Quiz</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Aufgaben
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href='/codedeer/#aufgaben'>Aufgabe1</a></li>
              {/* <li><a class="dropdown-item" href="#">Englisch</a></li>
              <li><a class="dropdown-item" href="#">Hindu</a></li> */}
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">codedeer.de</a>
          </li>
        </ul>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="...." aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Suchen</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBar
