import React, {useEffect} from "react";
import './NavBar.css';
import { useSearchParams } from 'react-router-dom'

function NavBar({changePage}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const allowedVillaInputs = ['pasion', 'linda', 'paraiso', 'vistahermosa', 'grecia'];

    //Show specific house if person entered with a specific house link (e.g ?villa=pasion)
    useEffect(() => {
        if(searchParams.get('villa') && allowedVillaInputs.some(villaName => villaName === searchParams.get('villa'))) {
            changePage(searchParams.get('villa'))
        }
    })
    //We handle it in the navBar because the set search params can only be used inside of the router component.
    const handleUrl = ((pageName) => {
        setSearchParams({villa: pageName});
        changePage(pageName);
    })
    return (
        <div>
            <header className="bg-white black-80 tc pv4 avenir">
            <a href="." className="bg-black-80 ba b--black dib pa3 w2 h2 br-100">
            </a>
            <h1 className="mt2 mb0 baskerville i fw1 f1">Ekvillas</h1>
            <h2 className="mt2 mb0 f6 fw4 ttu tracked">Tu lugar de descanso</h2>
            <nav className="bt bb tc mw7 center mt4">
                <span className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => handleUrl('/')}>Home</span>
                <span className="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l"  onClick={() => handleUrl('pasion')}>Pasión</span>
                <span className="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/villa" onClick={() => handleUrl('linda')}>Linda</span>
                <span className="f6 f5-l link bg-animate black-80 hover-bg-light-pink dib pa3 ph4-l" href="/villa" onClick={() => handleUrl('paraiso')}>Paraiso</span>
                <span className="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/villa" onClick={() => handleUrl('vistahermosa')}>Vista Hermosa</span>
                <span className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" onClick={() => handleUrl('grecia')}>Grecia</span>
            </nav>
            </header>
        </div>
    )
}

export default NavBar;