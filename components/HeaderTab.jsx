import React from 'react'

export default function HeaderTab() {
  return (
    <nav className="nav container">
        <a className="nav-link link-dark active" aria-current="page" href="#">Falabella</a>
        <a className="nav-link link-dark" href="#">Sodimac</a>
        <a className="nav-link link-dark" href="#">Tottus</a>
        <a className="nav-link link-dark disabled" href="#" tabIndex="-1" aria-disabled="true">Linio</a>
    </nav>
  )
}
