import {assetsLinda, assetsParaiso, assetsPasion, assetsVistaHermosa} from './VillaAssets'
import './Villa.css'

function Villa({villaName}) {

    const changePage = (goTo) => {
        window.location.href = goTo
    }

    var villa = {}
    switch(villaName) {
        case 'pasion':
            villa = assetsPasion
            break;
        case 'linda':
            villa = assetsLinda
            break;
        case 'paraiso':
            villa = assetsParaiso
            break;
        case 'vistahermosa':
            villa = assetsVistaHermosa
            break;
        default:
            window.location.href = "https://dadames01.github.io/Ek_Villas/";
            // villa = assetsLinda
            break;
    }

    return(
        <div>
            <div>
            {
                villa.video ? (
                    <video width="320" height="240" controls>
                        <source src={villa.video} type="video/mp4"></source>
                    </video>
                ) : (
                    <div />
                )
            }
            </div>
            <main className="pa3 pa5-ns">
                <p className="f4 lh-copy measure">
                    {villa.description}
                </p>
            </main>
            <div className='button-margin'>
                <button className="button-33" onClick={() => changePage(villa.link)}>Comprobar disponibilidad</button>
            </div>
            <main className="cf w-100">
                {
                    villa.photos.map(photo => {
                        return(
                            <div className="fl w-50 w-third-m w-25-ns">
                                <div className="aspect-ratio aspect-ratio--1x1">
                                        <img className="db bg-center cover aspect-ratio--object" alt='house part'
                                        src={photo} />
                                </div>
                            </div>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Villa;