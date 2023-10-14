import { useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { calendarApi } from '../api';
import { onVideoGames } from '../store';

export const useVideoGames = (nombre_plataform, idGame = '') => {
  const dispatch = useDispatch();
  const [plataform, setPlataform] = useState([]);

  const getVideoGames = async (nombre_plataform) => {
    const { nombre_plataform: name } = nombre_plataform;
    try {
      const response = await calendarApi.post('/videoGames/getVideoGames', {
        nombre_plataform,
      });
      console.log(response);
      dispatch(onVideoGames(response.data.result));
      setPlataform(response.data.result);
    } catch (err) {
      console.log(err);
    }
  };

  const videoGame = async () => {
    try {
      const { data } = await calendarApi.post('/', {
        id: idGame,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const memorizeData = useMemo(() => plataform, [plataform]);

  return {
    plataform: memorizeData,
    getVideoGames,
    videoGame,
  };
};
