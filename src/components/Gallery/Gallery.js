import {useState, useRef} from "react";
import './Gallery.css'
import pasion from './../../images/home/pasion.jpeg';
import paraiso from './../../images/home/paraiso.jpeg';
import linda from './../../images/home/linda.jpeg';
import vistahermosa from './../../images/home/vistahermosa.jpeg';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery';


function Gallery({changePage}) {
    const [houses, setHouses] = useState([
    {
       link: pasion,
       capacity: '12',
       name: 'pasion',
       description: 'Villa Pasión'
    },
    {
        link: paraiso,
        capacity: '15',
        name: 'paraiso',
        description: 'Villa Paraiso'
    },
    {
        link: linda,
        capacity: '8',
        name: 'linda',
        description: 'Villa Linda'
    },
    {
        link: vistahermosa,
        capacity: '12',
        name: 'vistahermosa',
        description: 'Vista Hermosa'
    }
    ])
    const originalState = useRef(houses);

    var houseImages = houses.map(house => {
        return(
            {
                original: house.link,
                description: house.description,
                name: house.name
            }
        )
    })

    const filterImages = (selectedCapacity) => {
        setHouses(originalState.current.filter(house => Number(house.capacity) >= selectedCapacity))

    }

    return (
        <div>
            <span>Filtrar por número de invitados </span>
            <select name="houses" id="houses"
             onChange={event =>  filterImages(event.target.value)}>
                <option value="8">8 o menos</option> 
                <option value="12">12 o menos</option>
                <option value="15">15 o menos</option>
            </select>
            <div className="image-gallery">
                <ImageGallery items={houseImages} showIndex={true}/>
            </div>
        </div>
    )
}

export default Gallery;