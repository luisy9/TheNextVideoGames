import Atropos from "atropos/react";

export const CardsVideoGames = ({ plataform }) => {
    return (
        <div className="py-5">
            <div className="row">
                {plataform.map((e) => (
                    <>
                        <div className="col-md-3" key={e.name_videogames}>
                            <div className="container-fluid">
                                <Atropos className="atropos-banner"
                                    highlight={false}
                                    style={{ cursor: 'pointer' }} key={e.name_videogames}>
                                    <img key={e.img_videogame} src={`/${e.img_videogame}`} className="atropos-banner-spacer" alt="Imagen 1" data-atropos-offset="1" />
                                    {/* <img key={e.img_videogame} src={`/${e.img_videogame}`} alt="Imagen 1" data-atropos-offset="" /> */}
                                    <img key={e.img_videogame} src={`/${e.img_videogame}`} alt="Imagen 1" data-atropos-offset="-5" />
                                </Atropos>
                                <div className="card-body px-5">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <h5 className="card-title text-white py-2">{e.name_videogames}</h5>
                                        </div>
                                        <div className="col-sm-2">
                                            <p className="card-text text-white py-2">{e.precio_videogames}$</p>
                                        </div>
                                        <div className="my-3">
                                            <a href="#" className="btn btn-primary">Comprar</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    )
}

export default CardsVideoGames;