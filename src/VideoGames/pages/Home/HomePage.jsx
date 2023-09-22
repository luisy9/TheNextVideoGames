import { Navbar } from '../../../ui/components';
import { Plataformas, Presentation } from '../../components';
import '../../../../node_modules/atropos/atropos.min.css';
import './style.css';
import Buscador from '../../components/Buscador';


export const HomePage = () => {
    return (
        <>
            <Navbar />
            <div className='container-fluid containerHomePage'>
                <div className="pt-5">
                    <Presentation />
                    <div className='container-fluid'>
                        <Plataformas />
                    </div>
                    <div className='container-fluid'>
                        <Buscador />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage