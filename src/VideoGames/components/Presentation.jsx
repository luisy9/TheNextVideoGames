import mortalKombat from '../../assets/mortalKombat.jpg'
import './styles.css'

export const Presentation = () => {
  return (
        <div className='row pt-3'>
            <div className='col-md-4 columna-mortal px-5 text-center'>
                <h1>Los grandes héroes se forjan juntos. Juntos.</h1>
                <p>Peter Parker y Miles Morales vuelven para una nueva y emocionante aventura en la aclamada franquicia de Marvels Spider-Man el 20 de octubre para PS5.</p>
            </div>
            <div className='col-md-8 columna-mortal px-5'>
                <img src={mortalKombat} alt="Imagen 1" style={{ width: '100%', borderRadius: '10px' }} />
                <div className='boxDisponible'>
                    <div className='boxButton'>
                        <button className='botonYa-Disponible'><b>YA DISPONIBLE</b></button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Presentation
