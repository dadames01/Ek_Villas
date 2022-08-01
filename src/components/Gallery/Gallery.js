import React from "react";
import './Gallery.css'
import pasion from './../../images/pasion.png';
import paraiso from './../../images/paraiso.png';
import linda from './../../images/linda.png';
import vistahermosa from './../../images/vistahermosa.jpeg';

function Gallery() {
    return (
        <div>
            <main className="cf w-100">
                <div className="fl w-50 w-third-m w-25-ns">
                    <div className="aspect-ratio aspect-ratio--1x1">
                        <img src={pasion} alt="house"
                        className="db bg-center cover aspect-ratio--object" />
                    </div>
                </div>
                <div className="fl w-50 w-third-m w-25-ns">
                    <div className="aspect-ratio aspect-ratio--1x1">
                        <img src={linda} alt="house"
                        className="db bg-center cover aspect-ratio--object" />
                    </div>
                </div>
                <div className="fl w-50 w-third-m w-25-ns">
                    <div className="aspect-ratio aspect-ratio--1x1">
                        <img src={paraiso} alt="house"
                        className="db bg-center cover aspect-ratio--object" />
                    </div>
                </div>
                <div className="fl w-50 w-third-m w-25-ns">
                    <div className="aspect-ratio aspect-ratio--1x1">
                        <img src={vistahermosa} alt="house"
                        className="db bg-center cover aspect-ratio--object" />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Gallery;