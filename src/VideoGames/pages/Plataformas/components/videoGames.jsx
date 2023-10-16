// import { playstationLogo } from '../../../../assets/playstation.webp';
// import { nintendoLogo } from '../../../../assets/nintendo-banner.webp';
// import { xboxLogo } from '../../../../assets/xbox-logo.jpg';
import { useEffect } from 'react';
import { usePlataform } from '../../../../hooks/usePlataform';
import Atropos from 'atropos/react'
import { useNavigate } from 'react-router-dom';

export const VideoGames = ({ plataform }) => {
    const navigate = useNavigate();
    const { num, plataformUse } = usePlataform();

    useEffect(() => {
        plataformUse(plataform);
    }, [])

    let playstation = '../../../../assets/banner-ps.jpg';
    
    const buyPage = (idvideogame) => {
        navigate(`/venta/${idvideogame}`);
    }

    return (
        <div>
            <div className='container pt-3'>
                {
                    num === 1 ? <img src={playstation} alt='logo-playstation' style={{ width: '100%' }} />
                        : num === 2 ? <img src={playstation} alt='logo-playstation' />
                            : num === 3 ? <img src={playstation} alt='logo-playstation' />
                                : <></>
                }
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        plataform.map((e) => {
                            return (
                                <>
                                    <div className='col-md-3'>
                                        <Atropos
                                            className="atropos-banner"
                                            highlight={false}
                                            style={{ cursor: 'pointer' }}
                                        // onClick={() => navigateTo(`/Plataforma/${'PlayStation'}`)}
                                        >
                                            <img src={`../../../../${e.img_videogame}`} className="atropos-banner-spacer" alt="Imagen 1" data-atropos-offset="-5" />
                                            <img src={`../../../../${e.img_videogame}`} data-atropos-offset="-5" alt="Imagen 1" />
                                        </Atropos>
                                        <div className='d-flex'>
                                            <button className='text-white btn btn-primary' onClick={() => buyPage(e.idvideogames)}>Comprar</button>
                                            <div className=''>
                                                <p className='text-white mx-2'>{e.precio_videogames} $</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default VideoGames
