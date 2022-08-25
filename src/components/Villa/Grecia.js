import { assetsGrecia } from "./VillaAssets";
import Villa from "./Villa";

const Grecia = () => {
    return (
        <div>
            <div>
                <Villa villaAssets={assetsGrecia} />
            </div>
            <div className="villaDescription">
                <p>Majestuosa villa ubicada en Bonao a solo Una hora de la ciudad donde podrás disfrutar de impresionantes vistas y  amplios jardines </p>
                <p> Podrás Respirar aire puro y fresco mientras disfrutas con tus familiares y amigos en un ambiente privado y seguro </p>
                <h1>Características</h1>
                <p>Capacidad para 14 personas (puede aumentarse a 20 con costo adicional, ver más abajo)</p>
                <p>Piscina privada </p>
                <p>Cancha de basket</p>
                <p>Amplio Jardin </p>
                <p>Terrazas techada </p>
                <p>Billar </p>
                <p>Mesa de dominó </p>
                <p>Estudio con Tv climatizado </p>
                <p>2 Baños con vestidor en el area de la piscina </p>
                <p>Calentador </p>
                <p>inversor </p>
                <p>Sistema  de cámaras de Seguridad</p>
                <p>Wifi</p>
                <p>Area de parqueo</p>
                <p>almohadas y sábanas ( no incluimos toallas)</p>
                <p> papel de baño y jabón de tocador </p>
                <p>personal de soporte para manejo de equipos y limpieza de la piscina</p>
                <p>Cocina equipada con gas incluido</p>
                <p>Area de bar con Frezer</p>
                <h1>Checkin/out</h1>
                <h2>Checkin: 2:00 PM</h2>
                <h2>Checkout: 12:00 PM</h2>
                <h1>Precios</h1>
                <p>Fines de semana 300 USD$ por noche, mínimo dos noches</p>
                <p>Días de semana  250 USD$ por noche, mínimo dos noches </p>
                <p>Opcion para realizar eventos por un costo adicional a definir según el evento y la cantidad de personas </p>
                <h1>Opcionales</h1>
                <p>Habitación adicional para aumentar la capacidad hasta 20 personas — 50 USD$ x noche </p>
                <p>Bbq de gas - RD$500</p>
                <p>Servicio de cocinera - RD$1000 x dia </p>
                <p>Equipo de sonido - RD$1000</p>
                <h1>Métodos de pago</h1>
                <p>Para reservar depositar o transferir el 50% a la siguiente cuenta:</p>
                <p><b>Cuentas de ahorro Banco BHD  08431480035</b></p>
                <p>A nombre de Grecia Guzman </p>
                <p>Cédula  001-0903674-9</p>
                <p>Y el restante el día antes de la llegada </p>
                <h1>¡Te desaseamos la mejor de las estadías! </h1>
                <br></br>
                <h1>Estamos para servirte</h1>
                <br></br>
            </div>
        </div>
    )
}

export default Grecia;