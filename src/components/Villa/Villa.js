import './Villa.css'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";




function Villa({villaAssets}) {

        const images = villaAssets.photos.map(photo => {
            return (
                {
                    original: photo,
                }
            )
        })

    const changePage = (goTo) => {
        window.location.href = goTo
    }

    return(
        <div>
            <div>
            {
                villaAssets.video ? (
                    <video width="320" height="240" controls>
                        <source src={villaAssets.video} type="video/mp4"></source>
                    </video>
                ) : (
                    <div />
                )
            }
            </div>
            <main className="pa3 pa5-ns">
                <h1>
                    {villaAssets.description}
                </h1>
                <h4><p>{villaAssets.region} <a href={villaAssets.locationLink}>(Ver ubicación)</a></p></h4>
            </main>
            <div>
                <p>Desliza para ver las fotos</p>
            </div>
            <div className='image-gallery'>
                <ImageGallery items={images} showIndex={true} lazyLoad={true} useBrowserFullscreen={false}/>
            </div>
            <br></br>
            <div>
            {
                villaAssets.link ? (
                    <button className="button-33" onClick={() => changePage(villaAssets.link)}>Comprobar disponibilidad</button>
                ) : (
                    <div />
                )
            }
            </div>
        </div>
    )
}

export default Villa;