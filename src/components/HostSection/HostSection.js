import React from "react";
import './HostSection.css'
import hostphoto from './../../images/EjemploPortadaEk.png';

function HostSection() {
    return (
        <div>
            <h1 className="tc ph4 f3 f2-m f1-l fw2 black-90 mv3">
                Conoce a tu host
            </h1>
            <div className="dt mw6 center pt0 pb5 pv5-m pv6-ns">
                <div className="db dtc-ns v-mid-ns">
                    <img src={hostphoto} alt="Foto Host" className="w-100 mw7 w5-ns" />
                </div>
                <div className="db dtc-ns v-mid ph2 pr0-ns pl3-ns">
                    <p className="lh-copy">
                        Ekmania es una super host entregada y dedicada que hará todo lo posible para que tu estadía sea mágica.
                        Para ella tus deseos, son ordenes.
                    </p>
                    <p className="b">Contacto: 809-816-0669</p>
                </div>
            </div>
        </div>
    )
}

export default HostSection;