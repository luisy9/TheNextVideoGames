import { useParams } from 'react-router-dom'
import { useVideoGames } from '../../../hooks/useVideoGames';
import { useEffect } from 'react';

export const PlataformasLayout = () => {
    const params = useParams();

    const { getVideoGames, plataform } = useVideoGames();

    useEffect(() => {
        getVideoGames(params)
    }, [])

    return (
        <div className="">
            
        </div>
    )
}

export default PlataformasLayout
