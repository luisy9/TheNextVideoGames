import { Route } from 'react-router-dom'
import { PlataformasLayout } from '../pages/Plataformas'
import ps from '../../assets/ps-logo.jpg';
import xbox from '../../assets/xbox-logo.jpg';
import nintendo from '../../assets/nintendo-logo.webp';
import Atropos from 'atropos/react';
import './styles.css';

export const Plataformas = () => {
    return (
        <div className='container-fluid pt-4'>
            <div className='container-lg'>
                <div className='pt-5 pb-5 box'>
                    <h1 className=''>Elige tu <span className='gradient-text'>plataforma</span></h1>
                </div>
                <div className='row'>
                    <div className='col-md-4'>
                        <Atropos
                            className="atropos-banner"
                            highlight={false}
                            style={{ cursor: 'pointer' }}
                            onClick={() => console.log("enter")}
                        >
                            <img src={ps} className="atropos-banner-spacer" alt="Imagen 1" data-atropos-offset="5" />
                            <img src={ps} data-atropos-offset="-5" alt="Imagen 1" />
                            <img src={ps} data-atropos-offset="-2.5" alt="Imagen 1" />
                            <img src={ps} data-atropos-offset="0" alt="Imagen 1" />
                            <img src={ps} data-atropos-offset="2" alt="Imagen 1" />
                            <img src={ps} data-atropos-offset="5" alt="Imagen 1" />
                        </Atropos>
                    </div>
                    <div className='col-md-4 iconXBOX'>
                        <Atropos
                            className="atropos-banner col-md-4"
                            highlight={false}
                            style={{ cursor: 'pointer' }}
                            onClick={() => console.log("enter")}
                        >
                            <img src={xbox} className="atropos-banner-spacer" alt="Imagen 1" data-atropos-offset="5" />
                            <img src={xbox} data-atropos-offset="-5" alt="Imagen 1" />
                            <img src={xbox} data-atropos-offset="-2.5" alt="Imagen 1" />
                            <img src={xbox} data-atropos-offset="0" alt="Imagen 1" />
                            <img src={xbox} data-atropos-offset="2" alt="Imagen 1" />
                            <img src={xbox} data-atropos-offset="5" alt="Imagen 1" />
                        </Atropos>

                    </div>
                    <div className='col-md-4'>
                        <Atropos
                            className="atropos-banner col-md-4"
                            highlight={false}
                            style={{ cursor: 'pointer' }}
                            onClick={() => console.log("enter")}
                        >
                            <img src={nintendo} className="atropos-banner-spacer" alt="Imagen 1" data-atropos-offset="5" />
                            <img src={nintendo} data-atropos-offset="-5" alt="Imagen 1" />
                            <img src={nintendo} data-atropos-offset="-2.5" alt="Imagen 1" />
                            <img src={nintendo} data-atropos-offset="0" alt="Imagen 1" />
                            <img src={nintendo} data-atropos-offset="2" alt="Imagen 1" />
                            <img src={nintendo} data-atropos-offset="5" alt="Imagen 1" />
                        </Atropos>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Plataformas
