import mortalKombat from '../../assets/mortalKombat.jpg';

export const Presentation = () => {
    return (
        <div className='container-lg pt-4'>
            <div className=''>
                <div className='col'>
                    <img src={mortalKombat} alt="Imagen 1" style={{ width: '100%' }} />
                    <div className='boxDisponible'>
                        <div className='boxButton'>
                            <button className='botonYa-Disponible'><b>YA DISPONIBLE</b></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Presentation
