// import { useLocation } from 'react-router-dom';
// import { PlayStation, Nintendo, Xbox } from './'
// import { useLocationPage } from '../../../hooks';

import { useParams } from "react-router-dom"
import { useVideoGames } from "../../../hooks/useVideoGames";

// export const PlataformasLayout = () => {

//     const location = useLocation();
//     const { play, xbox, nintendo } = useLocationPage(location);

//     return (
//         <>
//             {
//                 play > 0 ? <div className="container-lg">
//                     <PlayStation />
//                 </div> : <></>
//             }

//             {
//                 xbox > 0 ? <div className="container-lg">
//                     <Xbox />
//                 </div> : <></>
//             }
//             {
//                 nintendo > 0 ? <div className='container-lg'>
//                     <Nintendo />
//                 </div> : <></>
//             }
//         </>
//     )
// }

// export default PlataformasLayout;

export const PlataformasLayout = () => {
    const params = useParams();
    const { getVideoGames , plataform } = useVideoGames();

    getVideoGames(params)

    return (
        <div className="">

        </div>
    )
}

export default PlataformasLayout
