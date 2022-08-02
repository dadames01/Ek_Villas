import {useState, useRef} from "react";
import './Gallery.css'
import pasion from './../../images/pasion.png';
import paraiso from './../../images/paraiso.png';
import linda from './../../images/linda.png';
import vistahermosa from './../../images/vistahermosa.jpeg';


function Gallery() {
    const [houses, setHouses] = useState([
    {
       link: pasion,
       capacity: '10'
    },
    {
        link: paraiso,
        capacity: '8'
    },
    {
        link: linda,
        capacity: '6'
    },
    {
        link: vistahermosa,
        capacity: '2'
    }
    ])
    const originalState = useRef(houses);

    const filterImages = (selectedCapacity) => {
        setHouses(originalState.current.filter(house => Number(house.capacity) >= selectedCapacity))

    }

    return (
        <div>
            <span>Filtrar por número de invitados </span>
            <select name="houses" id="houses"
             onChange={event =>  filterImages(event.target.value)}>
                <option value="2">2+</option>
                <option value="6">6+</option>
                <option value="8">8+</option>
                <option value="10">10+</option>
            </select>
            <main className="cf w-100">
            { 
            houses.map(house => {
                return (
                    <div className="fl w-50 w-third-m w-25-ns">
                        <div className="aspect-ratio aspect-ratio--1x1">
                            <img src={house.link} alt="house"
                            className="db bg-center cover aspect-ratio--object" />
                        </div>
                    </div>
                    );
                })
            }
            </main>
        </div>
    )
}

export default Gallery;