import { Plataformas, Presentation } from '../../components';
import '../../../../node_modules/atropos/atropos.min.css';
import './style.css';
import Buscador from '../../components/Buscador';


export const HomePage = () => {
    return (
        <>
            <div className='containerHomePage'>
                <div className='container'>
                    <Presentation />
                </div>
                <div className='container-fluid'>
                    <Plataformas />
                </div>
                <div className='container-fluid'>
                    <Buscador />
                </div>
            </div>
        </>
    )
}

export default HomePage