import Link from 'next/link'

export default function Header() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">Company ABC Inc.</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Group 1</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Group 2</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Group 3</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Group 4</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Group 5</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" href="#">Group 6</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Group 7</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Group 8
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Service 1</a></li>
                  <li><a className="dropdown-item" href="#">Service 2</a></li>
                  <li><a className="dropdown-item" href="#">Service 3</a></li>
                  <li><a className="dropdown-item" href="#">Service 4</a></li>
                  <li><a className="dropdown-item" href="#">Service 5</a></li>
                  <li><a className="dropdown-item" href="#">Service 6</a></li>
                  <li><a className="dropdown-item" href="#">Service 7</a></li>
                  <li><a className="dropdown-item" href="#">Service 8</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Service 9</a></li>
                  <li><a className="dropdown-item" href="#">Service 10</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Group 9</a>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

  )
}
