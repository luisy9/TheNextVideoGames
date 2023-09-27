import { useLocation } from 'react-router-dom';
import { PlayStation, Nintendo, Xbox } from './'
import { useLocationPage } from '../../../hooks';

export const PlataformasLayout = () => {

    const location = useLocation();
    const { play, xbox, nintendo } = useLocationPage(location);

    return (
        <>
            {
                play > 0 ? <div className="container-lg">
                    <PlayStation />
                </div> : <></>
            }

            {
                xbox > 0 ? <div className="container-lg">
                    <Xbox />
                </div> : <></>
            }
            {
                nintendo > 0 ? <div className='container-lg'>
                    <Nintendo />
                </div> : <></>
            }
        </>
    )
}

export default PlataformasLayout;
