// import { HashLink as Link } from "react-router-hash-link";
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div id="principal" className="rectangulo"></div>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
        <div className="container">
          <Link href="/">
            <img
              src="/images/virgen.png"
              width="85"
              alt="logo"
              loading="lazy"
              className="mr-md-3"
            />
          </Link>
          <Link href="/">
            <img src="/images/epdb.png" height="68" alt="epdb" loading="lazy" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="enlaces collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-4">
                {/* <Link className="nav-link" to={"/#principal"}> */}
                <Link href="/">
                  <a className="nav-link">Inicio</a>
                </Link>
              </li>
              <li className="nav-item dropdown mr-4">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Programas
                </a>
                <div className="dropdown-menu">
                  <Link href="/equipo-multidisciplinario">
                    <a className="dropdown-item">Equipo Multidisciplinario</a>
                  </Link>
                  <Link href="/escuela-especial">
                    <a className="dropdown-item">
                      Escuela de Educación Especial
                    </a>
                  </Link>
                  <Link href="/escuela-inicial">
                    <a className="dropdown-item">
                      Escuela Inicial en Familia Comunitaria
                    </a>
                  </Link>
                  <Link href="/desarrollo-infantil">
                    <a className="dropdown-item">Desarrollo Infantil</a>
                  </Link>
                  <Link href="/asistencia-social">
                    <a className="dropdown-item">Area de Asistencia Social</a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="/"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Nosotros
                </a>
                <div className="dropdown-menu">
                  <Link href="/nosotros">
                    <a className="dropdown-item">¿Quiénes Somos?</a>
                  </Link>
                  <Link href="/directorio">
                    <a className="dropdown-item">Directorio</a>
                  </Link>
                  <Link href="/administrativos">
                    <a className="dropdown-item">Plantel Administrativo</a>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
