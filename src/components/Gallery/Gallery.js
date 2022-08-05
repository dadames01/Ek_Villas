import {useState, useRef} from "react";
import './Gallery.css'
import pasion from './../../images/home/pasion.jpeg';
import paraiso from './../../images/home/paraiso.jpeg';
import linda from './../../images/home/linda.jpeg';
import vistahermosa from './../../images/home/vistahermosa.jpeg';
import { Link } from "react-router-dom";


function Gallery({changePage}) {
    const [houses, setHouses] = useState([
    {
       link: pasion,
       capacity: '12',
       name: 'pasion'
    },
    {
        link: paraiso,
        capacity: '15',
        name: 'paraiso'
    },
    {
        link: linda,
        capacity: '8',
        name: 'linda'
    },
    {
        link: vistahermosa,
        capacity: '12',
        name: 'vistahermosa'
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
                <option value="8">8 o menos</option> 
                <option value="12">12 o menos</option>
                <option value="15">15 o menos</option>
            </select>
            <main className="cf w-100">
            { 
            houses.map(house => {
                return (
                    <Link to='villa'>
                    <div className="fl w-50 w-third-m w-25-ns">
                        <div className="aspect-ratio aspect-ratio--1x1">
                            <img src={house.link} alt="house"
                            className="db bg-center cover aspect-ratio--object"
                            onClick={() => changePage(house.name)} />
                        </div>
                    </div>
                    </Link>
                    );
                })
            }
            </main>
        </div>
    )
}

export default Gallery;