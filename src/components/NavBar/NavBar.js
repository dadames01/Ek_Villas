import React from "react";
import './NavBar.css'
function NavBar() {
    return (
        <div>
            <header className="bg-white black-80 tc pv4 avenir">
            <a href="." className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
            </a>
            <h1 className="mt2 mb0 baskerville i fw1 f1">Ekvillas</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">Tu lugar de descanso</h2>
            <nav className="bt bb tc mw7 center mt4">
                <a className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Pasión</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Linda</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/about">Paraiso</a>
                <a className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Vista Hermosa</a>
            </nav>
            </header>
        </div>
    )
}

export default NavBar;