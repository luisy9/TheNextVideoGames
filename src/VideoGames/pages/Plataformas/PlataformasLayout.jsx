import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useVideoGames } from '../../../hooks/useVideoGames';
import { VideoGames } from './components'

export const PlataformasLayout = () => {
    const params = useParams();

    const { getVideoGames, plataform } = useVideoGames();

    useEffect(() => {
        getVideoGames(params)
    }, [])

    return (
        <div className="">
            {
                plataform === null ? <></> : <VideoGames plataform={plataform} />
            }
        </div>
    )
}
export default PlataformasLayout
