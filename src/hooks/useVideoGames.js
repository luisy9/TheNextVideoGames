import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { onVideoGames, newBuy } from '../store';

export const useVideoGames = () => {
  const dispatch = useDispatch();
  const [plataform, setPlataform] = useState(null);
  const [ game, setGame ] = useState(null);

  const getVideoGames = async ({ name }) => {
    try {
      const { data } = await calendarApi.post('/videoGames/getVideoGames', {
        name,
      });
      dispatch(onVideoGames(data.result));
      setPlataform(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const videoGame = async ({ name }) => {
    try {
      const { data } = await calendarApi.post('/videoGames/getVideoGame', {
        idvideogame: name
      })

      dispatch(newBuy(data.result));
      setGame(data.result);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    plataform,
    getVideoGames,
    videoGame,
  };
};
