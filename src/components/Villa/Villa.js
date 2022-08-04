import linda1 from '../../images/linda/linda1.jpeg'
import linda2 from '../../images/linda/linda2.jpeg'
import linda3 from '../../images/linda/linda3.jpeg'
import linda4 from '../../images/linda/linda4.jpeg'
import linda5 from '../../images/linda/linda5.jpeg'
import linda6 from '../../images/linda/linda6.jpeg'
import linda7 from '../../images/linda/linda7.jpeg'
import linda8 from '../../images/linda/linda8.jpeg'
import linda9 from '../../images/linda/linda9.jpeg'
import linda10 from '../../images/linda/linda10.jpeg'
import linda11 from '../../images/linda/linda11.jpeg'
import linda12 from '../../images/linda/linda12.jpeg'
import linda13 from '../../images/linda/linda13.jpeg'
import linda14 from '../../images/linda/linda14.jpeg'
import linda15 from '../../images/linda/linda15.jpeg'
import linda16 from '../../images/linda/linda16.jpeg'
import linda17 from '../../images/linda/linda17.jpeg'
import linda18 from '../../images/linda/linda18.jpeg'
import linda19 from '../../images/linda/linda19.jpeg'
import linda20 from '../../images/linda/linda20.jpeg'
import linda21 from '../../images/linda/linda21.jpeg'
import linda22 from '../../images/linda/linda22.jpeg'
import linda23 from '../../images/linda/linda23.jpeg'



function Villa({villaName}) {
    const fotosPasion = []
    const fotosLinda = [linda1, linda2, linda3, linda4, linda5, linda6, linda7, linda8, linda9, linda10, linda11, linda12,
        linda13, linda14, linda15, linda16, linda17, linda18, linda19, linda20, linda21, linda22, linda23]
    const fotosParaiso = []
    const fotosVistaHermosa = []


    var fotos = []
    switch(villaName) {
        case 'pasion':
            fotos = fotosPasion
            break;
        case 'linda':
            fotos = fotosLinda
            break;
        case 'paraiso':
            fotos = fotosParaiso
            break;
        case 'vistahermosa':
            fotos = fotosVistaHermosa
            break;
        default:
            fotos = []
    }

    return(
        <div>
            <main className="cf w-100">
                {
                    fotos.map(photo => {
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