import {useState, useRef} from "react";
import './Gallery.css'
import { assetsPasion, assetsLinda, assetsParaiso, assetsVistaHermosa, assetsGrecia } from "../Villa/VillaAssets";
import ImageGallery from 'react-image-gallery';


function Gallery({changePage}) {
    const [houses, setHouses] = useState([
    {
       link: assetsPasion.homePhoto,
       capacity: assetsPasion.capacity,
       name: assetsPasion.name,
       description: assetsPasion.description
    },
    {
        link: assetsParaiso.homePhoto,
        capacity: assetsParaiso.capacity,
        name: assetsParaiso.name,
        description: assetsParaiso.description
    },
    {
        link: assetsLinda.homePhoto,
        capacity: assetsLinda.capacity,
        name: assetsLinda.name,
        description: assetsLinda.description
    },
    {
        link: assetsVistaHermosa.homePhoto,
        capacity: assetsVistaHermosa.capacity,
        name: assetsVistaHermosa.name,
        description: assetsVistaHermosa.description
    },
    {
        link: assetsGrecia.homePhoto,
        capacity: assetsGrecia.capacity,
        name: assetsGrecia.name,
        description: assetsGrecia.description
    },
    ])
    const originalState = useRef(houses);

    var houseImages = houses.map(house => {
        return(
            {
                original: house.link,
                description: house.description,
                name: house.name,
            }
        )
    })

    const filterImages = (selectedCapacity) => {
        setHouses(originalState.current.filter(house => Number(house.capacity) >= selectedCapacity))

    }

    const changePhoto = (event) => {
        const houseNameStoredValue = event.target.attributes[1].nodeValue
        const houseName = houseNameStoredValue.replace('/static/media/', '').split('.')[0].split('home')[1];
        changePage(houseName)
        
    }

    return (
        <div>
            <span>Filtrar por número de invitados </span>
            <select name="houses" id="houses"
             onChange={event =>  filterImages(event.target.value)}>
                <option value="8">8 o menos</option> 
                <option value="12">12 o menos</option>
                <option value="14">14 o menos</option>
                <option value="15">15 o menos</option>
            </select>
            <div>
                <p>Desliza para ver las diferentes propiedades y haz click para ir a su página</p>
            </div>
            <div className="image-gallery">
                <ImageGallery items={houseImages} showIndex={true} useBrowserFullscreen={false} onClick={changePhoto}/>
            </div>
        </div>
    )
}

export default Gallery;