import { Link } from 'react-router-dom'
import Atropos from 'atropos/react'

export const CardsVideoGames = ({ plataform }) => {
  return (
        <div className="py-5">
            <div className="row">
                {plataform.map((e) => (
                    <>
                        <div className="col-md-3">
                            <div className="container-fluid">
                                <a>
                                    <Link to={`/venta/${e.idvideogames}`}>
                                        <Atropos className="atropos-banner"
                                            highlight={false}
                                            style={{ cursor: 'pointer' }}
                                            key={e.img_videogame}
                                            >
                                            <img src={`/${e.img_videogame}`} className="atropos-banner-spacer" alt="Imagen 1" data-atropos-offset="1cd " />
                                            <img key={e.img_videogame} src={`/${e.img_videogame}`} alt="Imagen 1" data-atropos-offset="-5" />
                                        </Atropos>
                                    </Link>
                                </a>
                                <div className="card-body px-5">
                                    <div className="row">
                                        <div className="col-sm-10">
                                            <h5 className="card-title text-white py-2" key={e.name_videogames}>{e.name_videogames}</h5>
                                        </div>
                                        <div className="col-sm-2">
                                            <p className="card-text text-white py-2" key={e.precio_videogames}>{e.precio_videogames}$</p>
                                        </div>
                                        <div className="my-3">
                                            <a className="btn btn-primary"><Link to={`/venta/${e.idvideogames}`} style={{ color: 'white', textDecoration: 'none' }}>Comprar</Link></a>
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