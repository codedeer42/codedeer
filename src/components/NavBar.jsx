
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavBar = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Codedeer</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="https://www.buymeacoffee.com/codedeer">Kauf mir einen Kaffee</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Quiz</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Sprachen
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Deutsch</a></li>
              <li><a class="dropdown-item" href="#">Englisch</a></li>
   
              <li><a class="dropdown-item" href="#">Hindu</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">codedeer.de</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="...." aria-label="Search"></input>
          <button class="btn btn-outline-success" type="submit">Suchen</button>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default NavBar
