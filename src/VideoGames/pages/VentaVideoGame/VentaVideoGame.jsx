import { useParams } from 'react-router-dom';
import { useVideoGames } from '../../../hooks/useVideoGames'

export const VentaVideoGame = () => {
  const params = useParams();
  const { videoGame } = useVideoGames(params);

  return (
    <div className="">
      <div className="row">
        <div className="col-md-8">

        </div>

        <div className="col-md-4">

        </div>
      </div>
    </div>
  )
}

export default VentaVideoGame
