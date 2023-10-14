import { useEffect } from 'react'
import { useVideoGames } from '../../../../hooks'
import { CardsVideoGames } from './components'
import logo_ps from '../../../../assets/banner-ps.jpg'

export const PlayStation = () => {
  const { getVideoGames, plataform } = useVideoGames('PlayStation')

  useEffect(() => {
    getVideoGames()
  }, [])

  return (
    <div>
      <div className="container-fluid">
        <div className="container-lg">
          <div className="row">
            <img src={logo_ps} alt="logo ps" />
            <CardsVideoGames plataform={plataform} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlayStation;
